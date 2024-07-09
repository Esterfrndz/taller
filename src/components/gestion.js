import React, { useState, useEffect } from 'react';
import './gestion.css';

const initialMechanics = [
  {
    name: "Mecánico 1",
    avatar: "https://via.placeholder.com/50",
    schedule: {
      "2024-07-01": {
        "09:00": true,
        "10:00": true,
        "11:00": false,
        "12:00": true,
        "13:00": false,
        "14:00": false,
        "15:00": false,
        "16:00": false,
        "17:00": false,
        "18:00": false,
        "19:00": false,
        "20:00": false,
      },
      "2024-07-09": {
        "09:00": true,
        "10:00": true,
        "11:00": false,
        "12:00": true,
        "13:00": false,
        "14:00": false,
        "15:00": false,
        "16:00": false,
        "17:00": false,
        "18:00": false,
        "19:00": false,
        "20:00": false,
      },
    },
  },
  // ... otros mecánicos
];

const AppointmentManager = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [mechanics, setMechanics] = useState(initialMechanics);

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const todayDate = getTodayDate();
    setCurrentDate(todayDate);
  }, []);

  const handleNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate.toISOString().split('T')[0]);
  };

  const handlePrevDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate.toISOString().split('T')[0]);
  };

  const handleTimeSlotClick = (mechanicIndex, time) => {
    setMechanics((prevMechanics) => {
      const updatedMechanics = [...prevMechanics];
      const updatedSchedule = { ...updatedMechanics[mechanicIndex].schedule };
      const currentDaySchedule = updatedSchedule[currentDate];

      if (currentDaySchedule && currentDaySchedule[time]) {
        alert(`Cita elegida con ${updatedMechanics[mechanicIndex].name} a las ${time}`);
        updatedSchedule[currentDate] = {
          ...currentDaySchedule,
          [time]: false, // Marcar la celda como ocupada
        };
      }

      updatedMechanics[mechanicIndex] = {
        ...updatedMechanics[mechanicIndex],
        schedule: updatedSchedule,
      };

      return updatedMechanics;
    });
  };

  return (
    <div>
      <div className="navigation">
        <button onClick={handlePrevDay}>Día Anterior</button>
        <span>{currentDate}</span>
        <button onClick={handleNextDay}>Día Siguiente</button>
      </div>
      <div className="container">
        {mechanics.map((mechanic, index) => (
          <div className="mechanic-column" key={index}>
            <img className="avatar" src={mechanic.avatar} alt={mechanic.name} />
            <div className="name">{mechanic.name}</div>
            <div className="schedule-grid">
              {mechanic.schedule[currentDate] ? (
                Object.keys(mechanic.schedule[currentDate]).map((time) => (
                  <div
                    className={`time-slot ${mechanic.schedule[currentDate][time] ? 'available' : 'unavailable'}`}
                    key={time}
                    onClick={() => mechanic.schedule[currentDate][time] && handleTimeSlotClick(index, time)}
                  >
                    {time}
                  </div>
                ))
              ) : (
                <div>No hay horarios disponibles para este día.</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentManager;
