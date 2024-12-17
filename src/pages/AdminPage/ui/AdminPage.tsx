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

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!eventName || !place || !city) {
      alert("Все поля должны быть заполнены!");
      return;
    }

    try {
      await addEvent({ event_name: eventName, place, city });
      alert("Мероприятие создано!");
      nav("/event");
    } catch (error) {
      console.error(error);
      alert("Ошибка при создании мероприятия.");
    }
  };

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileUpload = async (e: { preventDefault: () => void; }) => {
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
    } catch (error) {
      console.error(error);
      alert("Ошибка при загрузке файла.");
    }
  };

  if (isLoading || citiesLoading) {
    return (
      <Paper className="flex-1 flex flex-col p-2">
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      </Paper>
    );
  }

  return (
    <div className="max-w-[700px] w-full mx-auto p-4">
      <Paper className="flex-1 flex flex-col p-2">
        <Typography.Title as="h3" className="m-2">
          Создать новое мероприятие
        </Typography.Title>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField
            label="Название мероприятия"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
          <TextField
            label="Место проведения"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
          <div>
            <label htmlFor="city" className="block mb-1">Город</label>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Выберите город</option>
              {cities?.map((cityItem) => (
                <option key={cityItem} value={cityItem}>
                  {cityItem}
                </option>
              ))}
            </select>
          </div>
          <Button type="submit" disabled={isLoading}>Создать мероприятие</Button>
        </form>

        <form onSubmit={handleFileUpload} className="flex flex-col gap-4 mt-8">
          <Typography.Title as="h3" className="m-2">
            Загрузить csv файл с отзывами о предметах
          </Typography.Title>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="p-2 border border-gray-300 rounded"
          />
          <div className="mt-2">
            <TextField
              label="Введите название города"
              value={manualCity}
              onChange={(e) => setManualCity(e.target.value)}
              required
            />
          </div>
          <Button type="submit" disabled={isLoading || !file || !manualCity}>
            Загрузить CSV-файл
          </Button>
        </form>
              
        {error && <Typography.Title as="h3" className="text-red-500">
          Ошибка: 
          {'message' in error ? error.message : JSON.stringify(error)}
          </Typography.Title>}
      </Paper>
    </div>
  );
};

export default AdminPage;
