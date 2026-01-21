import { useEffect, useState } from "react";
import {
    getServiceCategories,
    submitContactForm
} from "../../api/contact";
import { toast } from "react-toastify";

const ContactForm = () => {
    const [services, setServices] = useState([]);
    const [imageName, setImageName] = useState("");
    const [serviceId, setServiceId] = useState("");
    const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        mobile: "",
        budget: "",
        project_brief: "",
        answer: "",
        image: null,
    });

    /* ---------- CAPTCHA ---------- */
    const generateCaptcha = () => {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ a, b });
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    /* ---------- FETCH SERVICES ---------- */
    useEffect(() => {
        getServiceCategories()
            .then((data) => setServices(data))
            .catch(() => console.error("Failed to load services"));
    }, []);

    /* ---------- HANDLERS ---------- */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm((prev) => ({ ...prev, image: file }));
            setImageName(file.name);
        }
    };

    /* ---------- SUBMIT ---------- */
    const handleSubmit = async (e) => {
        e.preventDefault();

        const correctAnswer = captcha.a + captcha.b;

        if (Number(form.answer) !== correctAnswer) {
            toast.error("Wrong captcha answer");
            generateCaptcha();
            return;
        }

        if (!form.image) {
            toast.error("Please upload image");
            return;
        }

        if (!serviceId) {
            toast.error("Please select service");
            return;
        }

        const formData = new FormData();
        formData.append("name", form.name.trim());
        formData.append("email", form.email.trim());
        formData.append("company", form.company.trim());
        formData.append("mobile", form.mobile.trim());
        formData.append("budget", form.budget.trim());
        formData.append("service_category_id", Number(serviceId));
        formData.append("project_brief", form.project_brief.trim());
        formData.append("image", form.image);

        try {
            setLoading(true);
            await submitContactForm(formData);
            toast.success("Contact form submitted successfully");

            setForm({
                name: "",
                email: "",
                company: "",
                mobile: "",
                budget: "",
                project_brief: "",
                answer: "",
                image: null,
            });
            setServiceId("");
            setImageName("");
            generateCaptcha();

        } catch (err) {
            console.error(err.response?.data || err);
            toast.error(err.response?.data?.message || "Submission failed");
        } finally {
            setLoading(false);
        }
    };

    /* ---------- UI ---------- */
    return (
        <div className="col-lg-7" data-aos="fade-left">
            <div className="contact-form-wrapper">
                <h3 className="form-title">(Note- This is only Business Related Form)</h3>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="row g-4">

                        <div className="col-md-6">
                            <label>Your Name</label>
                            <input
                                className="form-control"
                                placeholder="Your Name"
                                name="name"
                                value={form.name}
                                required
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-6">
                            <label>Your Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="email@example.com"
                                name="email"
                                value={form.email}
                                required
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-6">
                            <label>Your Company</label>
                            <input
                                className="form-control"
                                placeholder="Your Company"
                                name="company"
                                value={form.company}
                                required
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-6">
                            <label>Phone</label>
                            <input
                                className="form-control"
                                placeholder="9876543210"
                                name="mobile"
                                value={form.mobile}
                                required
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-6">
                            <label>Budget</label>
                            <input
                                className="form-control"
                                placeholder="Your Budget"
                                name="budget"
                                value={form.budget}
                                required
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-6">
                            <label>Services *</label>
                            <select
                                className="form-control"
                                value={serviceId}
                                onChange={(e) => setServiceId(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select</option>
                                {/* <option value="1" >Select</option> */}
                                {services.map((s) => (
                                    <option key={s.id} value={s.id}>
                                        {s.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="col-12">
                            <label>Project Brief *</label>
                            <textarea
                                className="form-control"
                                placeholder="Share more about your concept"
                                name="project_brief"
                                value={form.project_brief}
                                required
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-6">
                            <label>Select Image</label>
                            <input
                                type="file"
                                className="form-control"
                                name="image"
                                accept="image/*"
                                onChange={handleFile}
                                required
                            />
                            {imageName && (
                                <small className="text-success d-block mt-1">
                                    ✔ {imageName}
                                </small>
                            )}
                        </div>

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
                            <button
                                className="btn btn-cta-primary btn-lg w-100"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
