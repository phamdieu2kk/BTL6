import { useState } from "react";
import "./InfoForm.css";

function InfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    email: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Họ tên không được để trống.";
    if (!formData.phoneNumber.trim()) tempErrors.phoneNumber = "Số điện thoại không được để trống.";
    if (!formData.address.trim()) tempErrors.address = "Địa chỉ không được để trống.";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) tempErrors.email = "Email không hợp lệ.";
    if (!formData.dob.trim()) tempErrors.dob = "Ngày tháng năm sinh không được để trống.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Họ tên" value={formData.name} onChange={handleChange} />
      {errors.name && <div className="error">{errors.name}</div>}
      <input name="phoneNumber" placeholder="Số điện thoại" value={formData.phoneNumber} onChange={handleChange} />
      {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
      <input name="address" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} />
      {errors.address && <div className="error">{errors.address}</div>}
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      {errors.email && <div className="error">{errors.email}</div>}
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      {errors.dob && <div className="error">{errors.dob}</div>}
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default InfoForm;
