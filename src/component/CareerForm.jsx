import { useEffect, useState } from "react";
import { getVacancies, submitCareerForm } from "../api/career";
import { toast } from "react-toastify";

const CareerForm = ({ selectedVacancyId }) => {

    const [vacancies, setVacancies] = useState([]);
    const [resumeName, setResumeName] = useState("");
    const [experience, setExperience] = useState(""); // fresher | experienced
    const [roleId, setRoleId] = useState("");
    const [captcha, setCaptcha] = useState({ a: 0, b: 0 });


    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        expYears: "",
        expMonths: "",
        currentSalary: "",
        expectedSalary: "",
        joiningDays: "",
        answer: "",
        resume: null,
    });

    const generateCaptcha = () => {
        const a = Math.floor(Math.random() * 10) + 1; // 1–10
        const b = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ a, b });
    };


    useEffect(() => {
        generateCaptcha();
    }, []);


    /* ---------- FETCH VACANCIES ---------- */
    // useEffect(() => {
    //     getVacancies()
    //         .then((data) => {
    //             setVacancies(data.filter((v) => v.is_active));
    //         })
    //         .catch(() => console.error("Failed to load roles"));
    // }, []);
    useEffect(() => {
        getVacancies()
            .then((data) => {
                const active = data.filter((v) => v.is_active);
                setVacancies(active);

                if (selectedVacancyId) {
                    setRoleId(String(selectedVacancyId));
                }
            })
            .catch(() => console.error("Failed to load roles"));
    }, [selectedVacancyId]);


    /* ---------- INPUT HANDLERS ---------- */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm((prev) => ({ ...prev, resume: file }));
            setResumeName(file.name);
        }
    };

    /* ---------- SUBMIT ---------- */
    const handleSubmit = async (e) => {
        e.preventDefault();

        const correctAnswer = captcha.a + captcha.b;

        if (Number(form.answer) !== correctAnswer) {
            toast.error("Wrong captcha answer");
            generateCaptcha();        // regenerate on failure
            return;
        }

        if (!form.resume) {
            toast.error("Please upload resume");
            return;
        }

        if (!roleId || !experience) {
            toast.error("Please select role and experience");
            return;
        }

        const formData = new FormData();
        formData.append("vacancy_id", Number(roleId));
        formData.append("name", form.name.trim());
        formData.append("email", form.email.trim());
        formData.append("phone", form.phone.trim());
        formData.append("experience_type", experience); // fresher | experienced
        formData.append("available_in_days", Number(form.joiningDays));
        formData.append("resume", form.resume);

        if (experience === "experienced") {
            formData.append("total_experience_years", Number(form.expYears));
            formData.append("total_experience_months", Number(form.expMonths));
            formData.append("current_salary", Number(form.currentSalary));
            formData.append("expected_salary", Number(form.expectedSalary));
        }


        try {
            await submitCareerForm(formData);
            toast.success("Application submitted successfully");

            // Reset form
            setForm({
                name: "",
                email: "",
                phone: "",
                expYears: "",
                expMonths: "",
                currentSalary: "",
                expectedSalary: "",
                joiningDays: "",
                answer: "",
                resume: null,
            });
            setResumeName("");
            setExperience("");
            setRoleId("");
            generateCaptcha();
        } catch (err) {
            console.error(err.response?.data || err);
            alert(err.response?.data?.message || "Submission failed");
        }
    };

    /* ---------- UI ---------- */
    return (
        <div className="col-lg-7" data-aos="fade-left">
            <div className="contact-form-wrapper">
                <h3 className="form-title">(Note- This is only Career Related Form)</h3>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="row g-4">

                        {/* Name */}
                        <div className="col-md-6">
                            <label>Your Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                                value={form.name}
                                name="name"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div className="col-md-6">
                            <label>Your Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="email@example.com"
                                value={form.email}
                                name="email"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        {/* Phone */}
                        <div className="col-md-6">
                            <label>Phone</label>
                            <input
                                className="form-control"
                                placeholder="+91 9876543210"
                                value={form.phone}
                                name="phone"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        {/* Experience */}
                        <div className="col-md-6">
                            <label>Fresher / Experienced</label>
                            <select
                                className="form-control"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select</option>
                                <option value="fresher">Fresher</option>
                                <option value="experienced">Experienced</option>
                            </select>
                        </div>

                        {/* Experienced Fields */}
                        {experience === "experienced" && (
                            <>
                                <div className="col-md-6">
                                    <label>Experience (Years)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Years"
                                        value={form.expYears}
                                        name="expYears"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label>Experience (Months)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Months"
                                        value={form.expMonths}
                                        name="expMonths"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label>Current Salary</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Current Salary"
                                        value={form.currentSalary}
                                        name="currentSalary"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label>Expected Salary</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Expected Salary"
                                        value={form.expectedSalary}
                                        name="expectedSalary"
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}

                        {/* Role */}
                        <div className="col-md-6">
                            <label>Your Role</label>
                            {/* <select
                                className="form-control"
                                value={roleId}
                                onChange={(e) => setRoleId(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select</option>
                                {vacancies.map((v) => (
                                    <option key={v.id} value={v.id}>
                                        {v.job_name}
                                    </option>
                                ))}
                            </select> */}
                            <select
                                className="form-control"
                                value={roleId}
                                onChange={(e) => setRoleId(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select</option>
                                {vacancies.map((v) => (
                                    <option key={v.id} value={v.id}>
                                        {v.job_name}
                                    </option>
                                ))}
                            </select>

                        </div>

                        {/* Joining */}
                        <div className="col-md-6">
                            <label>Available to join (days)</label>
                            <input
                                className="form-control"
                                placeholder="5 Days"
                                value={form.joiningDays}
                                name="joiningDays"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        {/* Resume */}
                        <div className="col-md-6">
                            <label>Upload Resume</label>
                            <input
                                type="file"
                                className="form-control"
                                placeholder="Choose file | No file chosen"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFile}
                                required
                            />
                            {resumeName && (
                                <small className="text-success d-block mt-1">
                                    ✔ Selected file: <strong>{resumeName}</strong>
                                </small>
                            )}
                        </div>

                        {/* Captcha */}
                        <div className="col-md-6">
                            <label>Solve: {captcha.a} + {captcha.b} = ?</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter sum"
                                name="answer"
                                value={form.answer}
                                required
                                onChange={handleChange}
                            />
                        </div>


                        <div className="col-12">
                            <button className="btn btn-cta-primary btn-lg w-100">
                                Send Message
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default CareerForm;
