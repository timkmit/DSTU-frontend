import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { Typography } from "@/shared/ui/Text";
import { Paper } from "@/shared/ui/Paper";

const FeedbackPage = () => {
  const nav = useNavigate();
  const [city, setCity] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);
  const [positiveComment, setPositiveComment] = useState("");
  const [negativeComment, setNegativeComment] = useState("");
  const [additionally, setAdditionally] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (city) {
        setIsLoading(true);
        fetch(`https://pepper-coding.online/get_events?city=${city}`)
          .then((response) => response.json())
          .then((data) => {
            setEvents(data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Ошибка получения мероприятий:", error);
            setIsLoading(false);
          });
      } else {
        setEvents([]);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [city]);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!selectedEvent || !author || rating === 0 || !positiveComment || !negativeComment) {
      alert("Все поля должны быть заполнены!");
      return;
    }

    const reviewData = {
      event_id: selectedEvent,
      author,
      rating,
      positive_comment: positiveComment,
      negative_comment: negativeComment,
      additionally,
    };

    try {
      await fetch(`https://pepper-coding.online/review_event?city=${city}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
      alert("Отзыв успешно отправлен!");
    } catch (error) {
      console.error(error);
      alert("Ошибка при отправке отзыва.");
    }
  };

  const StarRating = ({ currentRating, onRate }: StarRatingProps) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-2xl ${
              star <= currentRating ? "text-yellow-500" : "text-gray-400"
            }`}
            onClick={() => onRate(star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-[700px] w-full mx-auto p-4">
      <Paper className="flex-1 flex flex-col p-2">
        <Typography.Title as="h3" className="m-2">
          Оставить отзыв о мероприятии
        </Typography.Title>
        
        <div className="mb-4">
          <label htmlFor="city" className="block mb-1">Город</label>
          <TextField
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="Введите город"
            required
          />
        </div>

        {city && isLoading && <p>Загрузка мероприятий...</p>}

        {events.length > 0 && !isLoading ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="event" className="block mb-1">Выберите мероприятие</label>
              <select
                id="event"
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Выберите мероприятие</option>
                {events.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="author" className="block mb-1">Выберите, кем вы являетесь</label>
              <select
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Выберите роль</option>
                <option value="Студент">Студент</option>
                <option value="Преподаватель">Преподаватель</option>
                <option value="Посетитель">Посетитель</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Оценка мероприятия</label>
              <StarRating currentRating={rating} onRate={(star: number) => setRating(star)} />
              {rating === 0 && <p className="text-red-500 text-sm">Выберите оценку</p>}
            </div>

            <TextField
              label="Больше всего понравилось"
              value={positiveComment}
              onChange={(e) => setPositiveComment(e.target.value)}
              required
            />

            <TextField
              label="Меньше всего понравилось"
              value={negativeComment}
              onChange={(e) => setNegativeComment(e.target.value)}
              required
            />

            <TextField
              label="Дополнительный комментарий"
              value={additionally}
              onChange={(e) => setAdditionally(e.target.value)}
            />

            <Button type="submit">Отправить отзыв</Button>
          </form>
        ) : (
          !isLoading &&
          city && (
            <p className="text-center text-gray-500">
              Мероприятия в данном городе не найдены.
            </p>
          )
        )}
      </Paper>
    </div>
  );
};

export default FeedbackPage;

interface Event {
  id: string;
  name: string;
}

interface StarRatingProps {
  currentRating: number;
  onRate: (rating: number) => void;
}