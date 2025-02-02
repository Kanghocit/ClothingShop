import React, { useState } from "react";
import "../css/App.css"; // Import file CSS

function SelectForm() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form className="select-form">
      <select
        id="options"
        value={selectedOption}
        onChange={handleSelectChange}
        className="custom-select"
      >
        <option value="option1">Mặc định</option>
        <option value="option2">Từ A → Z</option>
        <option value="option3">Từ Z → A</option>
        <option value="option4">Giá tăng dần</option>
        <option value="option5">Giá giảm dần</option>
        <option value="option6">Hàng cũ nhất</option>
        <option value="option7">Hàng mới nhất</option>
      </select>
    </form>
  );
}

export default SelectForm;
