import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddEventMutation } from "@/entities/Event/api/event.api";
import { useGetCitiesQuery } from "@/entities/Cities/api/cityApi";
import { Paper } from "@/shared/ui/Paper";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/Input";
import { Typography } from "@/shared/ui/Text";
import { Loader } from "@/shared/ui/Loader";
const AdminPage = () => {
    const nav = useNavigate();
    const [eventName, setEventName] = useState("");
    const [place, setPlace] = useState("");
    const [city, setCity] = useState("");
    const [manualCity, setManualCity] = useState("");
    const [file, setFile] = useState(null);
    const [addEvent, { isLoading, error }] = useAddEventMutation();
    const { data: cities, isLoading: citiesLoading } = useGetCitiesQuery();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!eventName || !place || !city) {
            alert("Все поля должны быть заполнены!");
            return;
        }
        try {
            await addEvent({ event_name: eventName, place, city });
            alert("Мероприятие создано!");
            nav("/event");
        }
        catch (error) {
            console.error(error);
            alert("Ошибка при создании мероприятия.");
        }
    };
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };
    const handleFileUpload = async (e) => {
        e.preventDefault();
        const cityToUpload = manualCity || city;
        if (!file || !cityToUpload) {
            alert("Пожалуйста, выберите файл и город для загрузки!");
            return;
        }
        const formData = new FormData();
        formData.append("file", file);
        const universityBranchName = encodeURIComponent(cityToUpload);
        try {
            const response = await fetch(`https://pepper-coding.online/upload_data?university_branch_name=${universityBranchName}`, {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "multipart/form-data",
                },
                body: formData,
            });
            if (!response.ok) {
                throw new Error("Ошибка при загрузке файла.");
            }
            alert("Файл успешно загружен!");
        }
        catch (error) {
            console.error(error);
            alert("Ошибка при загрузке файла.");
        }
    };
    if (isLoading || citiesLoading) {
        return (_jsx(Paper, { className: "flex-1 flex flex-col p-2", children: _jsx("div", { className: "flex justify-center items-center", children: _jsx(Loader, {}) }) }));
    }
    return (_jsx("div", { className: "max-w-[700px] w-full mx-auto p-4", children: _jsxs(Paper, { className: "flex-1 flex flex-col p-2", children: [_jsx(Typography.Title, { as: "h3", className: "m-2", children: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0435" }), _jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [_jsx(TextField, { label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F", value: eventName, onChange: (e) => setEventName(e.target.value), required: true }), _jsx(TextField, { label: "\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F", value: place, onChange: (e) => setPlace(e.target.value), required: true }), _jsxs("div", { children: [_jsx("label", { htmlFor: "city", className: "block mb-1", children: "\u0413\u043E\u0440\u043E\u0434" }), _jsxs("select", { id: "city", value: city, onChange: (e) => setCity(e.target.value), className: "w-full p-2 border border-gray-300 rounded", required: true, children: [_jsx("option", { value: "", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434" }), cities === null || cities === void 0 ? void 0 : cities.map((cityItem) => (_jsx("option", { value: cityItem, children: cityItem }, cityItem)))] })] }), _jsx(Button, { type: "submit", disabled: isLoading, children: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0435" })] }), _jsxs("form", { onSubmit: handleFileUpload, className: "flex flex-col gap-4 mt-8", children: [_jsx(Typography.Title, { as: "h3", className: "m-2", children: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C csv \u0444\u0430\u0439\u043B \u0441 \u043E\u0442\u0437\u044B\u0432\u0430\u043C\u0438 \u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430\u0445" }), _jsx("input", { type: "file", accept: ".csv", onChange: handleFileChange, className: "p-2 border border-gray-300 rounded" }), _jsx("div", { className: "mt-2", children: _jsx(TextField, { label: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u043E\u0440\u043E\u0434\u0430", value: manualCity, onChange: (e) => setManualCity(e.target.value), required: true }) }), _jsx(Button, { type: "submit", disabled: isLoading || !file || !manualCity, children: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C CSV-\u0444\u0430\u0439\u043B" })] }), error && _jsxs(Typography.Title, { as: "h3", className: "text-red-500", children: ["\u041E\u0448\u0438\u0431\u043A\u0430:", 'message' in error ? error.message : JSON.stringify(error)] })] }) }));
};
export default AdminPage;
