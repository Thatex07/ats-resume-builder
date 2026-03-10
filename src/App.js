import { useState } from "react";

const defaultCV = {
  personal: {
    name: "Ad Soyad",
    title: "Yazılım Mühendisi",
    email: "ornek@email.com",
    phone: "+90 5xx xxx xx xx",
    location: "İstanbul, Turkey",
    linkedin: "linkedin.com/in/kullanici",
    github: "github.com/kullanici",
    website: "websitesi.com",
    summary:
      "Kendinizi kısaca tanıtın. Hangi teknolojilere hakimsiniz, ne tür projelerde çalıştınız? 2-3 cümle yeterli.",
  },
  education: [
    {
      id: 1,
      degree: "Bilgisayar Mühendisliği (örnek bölüm)",
      school: "Örnek Üniversite",
      startDate: "2019",
      endDate: "2023",
      location: "İstanbul, Turkey",
      gpa: "3.20 / 4.00",
      notes: "Onur öğrencisi, burs vb. varsa buraya yazın",
    },
  ],
  experience: [
    {
      id: 1,
      company: "Örnek Şirket A.Ş.",
      position: "Junior Developer",
      startDate: "2023-06",
      endDate: "2024-01",
      current: false,
      location: "İstanbul, Turkey",
      bullets: [
        "Ne yaptığınızı net yazın (örn: X sistemi geliştirerek Y süresini %30 azalttım).",
        "Hangi teknolojileri kullandınız?",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      name: "Örnek Proje Adı",
      tech: "Python, React, PostgreSQL",
      startDate: "2023",
      endDate: "2024",
      bullets: [
        "Projenin amacını kısaca açıklayın.",
        "Kullandığınız teknolojiler ve projedeki rolünüz neydi?",
      ],
    },
  ],
  skills: [
    { id: 1, category: "Programlama Dilleri", items: "Python, JavaScript, C#" },
    {
      id: 2,
      category: "Araçlar & Teknolojiler",
      items: "React, Node.js, Docker, Git",
    },
    {
      id: 3,
      category: "Diller",
      items: "Türkçe (Anadil), İngilizce (İleri Seviye)",
    },
  ],
  certifications: [
    {
      id: 1,
      name: "Örnek Sertifika (AWS, Google vb.)",
      issuer: "Veren Kurum",
      date: "2023",
    },
  ],
};

function CVPreview({ cv }) {
  const fmtDate = (d) => {
    if (!d) return "";
    if (d.length === 4) return d;
    const [y, m] = d.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[parseInt(m) - 1]} ${y}`;
  };

  const contactParts = [
    cv.personal.phone,
    cv.personal.email,
    cv.personal.location,
    cv.personal.linkedin,
    cv.personal.github,
    cv.personal.website,
  ].filter(Boolean);

  return (
    <div
      id="cv-preview"
      style={{
        fontFamily: "'Times New Roman', serif",
        fontSize: 11,
        color: "#111",
        background: "#fff",
        padding: "40px 52px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {cv.personal.name}
      </div>
      {cv.personal.title && (
        <div style={{ fontSize: 12, color: "#444", marginBottom: 5 }}>
          {cv.personal.title}
        </div>
      )}
      <div
        style={{
          fontSize: 10,
          color: "#333",
          borderBottom: "1.5px solid #222",
          paddingBottom: 8,
          marginBottom: 14,
        }}
      >
        {contactParts.join("  |  ")}
      </div>

      {cv.personal.summary && (
        <>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderBottom: "1px solid #aaa",
              paddingBottom: 2,
              marginTop: 14,
              marginBottom: 7,
            }}
          >
            Summary
          </div>
          <div style={{ fontSize: 11, lineHeight: 1.65 }}>
            {cv.personal.summary}
          </div>
        </>
      )}

      {cv.experience.length > 0 && (
        <>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderBottom: "1px solid #aaa",
              paddingBottom: 2,
              marginTop: 14,
              marginBottom: 7,
            }}
          >
            Experience
          </div>
          {cv.experience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 700, fontSize: 11 }}>
                  {exp.position}
                </span>
                <span style={{ fontSize: 10.5, color: "#555" }}>
                  {fmtDate(exp.startDate)} -{" "}
                  {exp.current ? "Present" : fmtDate(exp.endDate)}
                </span>
              </div>
              <div style={{ fontSize: 10.5, color: "#444", marginBottom: 2 }}>
                {exp.company}
                {exp.location ? ` | ${exp.location}` : ""}
              </div>
              {exp.bullets
                .filter((b) => b.trim())
                .map((b, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: 11,
                      paddingLeft: 14,
                      textIndent: "-8px",
                      marginLeft: 8,
                      marginBottom: 2,
                    }}
                  >
                    - {b}
                  </div>
                ))}
            </div>
          ))}
        </>
      )}

      {cv.projects.length > 0 && (
        <>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderBottom: "1px solid #aaa",
              paddingBottom: 2,
              marginTop: 14,
              marginBottom: 7,
            }}
          >
            Projects
          </div>
          {cv.projects.map((p) => (
            <div key={p.id} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 700, fontSize: 11 }}>{p.name}</span>
                <span style={{ fontSize: 10.5, color: "#555" }}>
                  {p.startDate}
                  {p.endDate && p.endDate !== p.startDate
                    ? ` - ${p.endDate}`
                    : ""}
                </span>
              </div>
              {p.tech && (
                <div style={{ fontSize: 10.5, color: "#444", marginBottom: 2 }}>
                  Technologies: {p.tech}
                </div>
              )}
              {p.bullets
                .filter((b) => b.trim())
                .map((b, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: 11,
                      paddingLeft: 14,
                      textIndent: "-8px",
                      marginLeft: 8,
                      marginBottom: 2,
                    }}
                  >
                    - {b}
                  </div>
                ))}
            </div>
          ))}
        </>
      )}

      {cv.education.length > 0 && (
        <>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderBottom: "1px solid #aaa",
              paddingBottom: 2,
              marginTop: 14,
              marginBottom: 7,
            }}
          >
            Education
          </div>
          {cv.education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 700, fontSize: 11 }}>
                  {edu.degree}
                </span>
                <span style={{ fontSize: 10.5, color: "#555" }}>
                  {edu.startDate}
                  {edu.endDate ? ` - ${edu.endDate}` : ""}
                </span>
              </div>
              <div style={{ fontSize: 10.5, color: "#444" }}>
                {edu.school}
                {edu.location ? ` | ${edu.location}` : ""}
              </div>
              {edu.gpa && <div style={{ fontSize: 10.5 }}>GPA: {edu.gpa}</div>}
              {edu.notes && <div style={{ fontSize: 10.5 }}>{edu.notes}</div>}
            </div>
          ))}
        </>
      )}

      {cv.skills.length > 0 && (
        <>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderBottom: "1px solid #aaa",
              paddingBottom: 2,
              marginTop: 14,
              marginBottom: 7,
            }}
          >
            Skills
          </div>
          {cv.skills.map((sk) => (
            <div
              key={sk.id}
              style={{ display: "flex", gap: 6, marginBottom: 3, fontSize: 11 }}
            >
              <span style={{ fontWeight: 700, minWidth: 170 }}>
                {sk.category}:
              </span>
              <span>{sk.items}</span>
            </div>
          ))}
        </>
      )}

      {cv.certifications.length > 0 && (
        <>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderBottom: "1px solid #aaa",
              paddingBottom: 2,
              marginTop: 14,
              marginBottom: 7,
            }}
          >
            Certifications
          </div>
          {cv.certifications.map((c) => (
            <div key={c.id} style={{ marginBottom: 4 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 700, fontSize: 11 }}>{c.name}</span>
                <span style={{ fontSize: 10.5, color: "#555" }}>{c.date}</span>
              </div>
              {c.issuer && (
                <div style={{ fontSize: 10.5, color: "#444" }}>{c.issuer}</div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

function EditorPanel({ cv, setCV }) {
  const [activeTab, setActiveTab] = useState("personal");

  const updatePersonal = (field, value) => {
    setCV({ ...cv, personal: { ...cv.personal, [field]: value } });
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      location: "",
      bullets: [""],
    };
    setCV({ ...cv, experience: [...cv.experience, newExp] });
  };
  const updateExperience = (id, field, value) => {
    setCV({
      ...cv,
      experience: cv.experience.map((e) =>
        e.id === id ? { ...e, [field]: value } : e,
      ),
    });
  };
  const removeExperience = (id) => {
    setCV({ ...cv, experience: cv.experience.filter((e) => e.id !== id) });
  };
  const addBullet = (expId) => {
    setCV({
      ...cv,
      experience: cv.experience.map((e) =>
        e.id === expId ? { ...e, bullets: [...e.bullets, ""] } : e,
      ),
    });
  };
  const updateBullet = (expId, index, value) => {
    setCV({
      ...cv,
      experience: cv.experience.map((e) => {
        if (e.id !== expId) return e;
        const newBullets = [...e.bullets];
        newBullets[index] = value;
        return { ...e, bullets: newBullets };
      }),
    });
  };
  const removeBullet = (expId, index) => {
    setCV({
      ...cv,
      experience: cv.experience.map((e) =>
        e.id === expId
          ? { ...e, bullets: e.bullets.filter((_, i) => i !== index) }
          : e,
      ),
    });
  };

  const addProject = () => {
    setCV({
      ...cv,
      projects: [
        ...cv.projects,
        {
          id: Date.now(),
          name: "",
          tech: "",
          startDate: "",
          endDate: "",
          bullets: [""],
        },
      ],
    });
  };
  const updateProject = (id, field, value) => {
    setCV({
      ...cv,
      projects: cv.projects.map((p) =>
        p.id === id ? { ...p, [field]: value } : p,
      ),
    });
  };
  const removeProject = (id) => {
    setCV({ ...cv, projects: cv.projects.filter((p) => p.id !== id) });
  };
  const addProjectBullet = (projId) => {
    setCV({
      ...cv,
      projects: cv.projects.map((p) =>
        p.id === projId ? { ...p, bullets: [...p.bullets, ""] } : p,
      ),
    });
  };
  const updateProjectBullet = (projId, index, value) => {
    setCV({
      ...cv,
      projects: cv.projects.map((p) => {
        if (p.id !== projId) return p;
        const newBullets = [...p.bullets];
        newBullets[index] = value;
        return { ...p, bullets: newBullets };
      }),
    });
  };
  const removeProjectBullet = (projId, index) => {
    setCV({
      ...cv,
      projects: cv.projects.map((p) =>
        p.id === projId
          ? { ...p, bullets: p.bullets.filter((_, i) => i !== index) }
          : p,
      ),
    });
  };

  const addEducation = () => {
    setCV({
      ...cv,
      education: [
        ...cv.education,
        {
          id: Date.now(),
          degree: "",
          school: "",
          startDate: "",
          endDate: "",
          location: "",
          gpa: "",
          notes: "",
        },
      ],
    });
  };
  const updateEducation = (id, field, value) => {
    setCV({
      ...cv,
      education: cv.education.map((e) =>
        e.id === id ? { ...e, [field]: value } : e,
      ),
    });
  };
  const removeEducation = (id) => {
    setCV({ ...cv, education: cv.education.filter((e) => e.id !== id) });
  };

  const addSkill = () => {
    setCV({
      ...cv,
      skills: [...cv.skills, { id: Date.now(), category: "", items: "" }],
    });
  };
  const updateSkill = (id, field, value) => {
    setCV({
      ...cv,
      skills: cv.skills.map((s) =>
        s.id === id ? { ...s, [field]: value } : s,
      ),
    });
  };
  const removeSkill = (id) => {
    setCV({ ...cv, skills: cv.skills.filter((s) => s.id !== id) });
  };

  const addCert = () => {
    setCV({
      ...cv,
      certifications: [
        ...cv.certifications,
        { id: Date.now(), name: "", issuer: "", date: "" },
      ],
    });
  };
  const updateCert = (id, field, value) => {
    setCV({
      ...cv,
      certifications: cv.certifications.map((c) =>
        c.id === id ? { ...c, [field]: value } : c,
      ),
    });
  };
  const removeCert = (id) => {
    setCV({
      ...cv,
      certifications: cv.certifications.filter((c) => c.id !== id),
    });
  };

  const inp = {
    width: "100%",
    padding: "7px 10px",
    border: "1px solid #e2e8f0",
    borderRadius: 6,
    fontSize: 13,
    boxSizing: "border-box",
    fontFamily: "inherit",
    outline: "none",
  };
  const card = {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    padding: "12px 14px",
    marginBottom: 10,
  };
  const lbl = {
    display: "block",
    fontSize: 11,
    fontWeight: 600,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: 4,
  };
  const silBtn = {
    padding: "2px 8px",
    fontSize: 11,
    background: "#fff1f2",
    border: "1px solid #fecdd3",
    borderRadius: 4,
    color: "#e11d48",
    cursor: "pointer",
    fontFamily: "inherit",
  };
  const ekleBtn = {
    padding: "5px 12px",
    fontSize: 12,
    background: "#f8fafc",
    border: "1px dashed #cbd5e1",
    borderRadius: 6,
    color: "#475569",
    cursor: "pointer",
    width: "100%",
    fontFamily: "inherit",
    marginTop: 4,
  };

  const tabs = [
    { id: "personal", label: "Kişisel" },
    { id: "experience", label: "Deneyim" },
    { id: "projects", label: "Projeler" },
    { id: "education", label: "Eğitim" },
    { id: "skills", label: "Beceriler" },
    { id: "certifications", label: "Sertifika" },
  ];

  return (
    <div style={{ padding: "16px 18px", height: "100%", overflowY: "auto" }}>
      <div
        style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 16 }}
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              padding: "6px 12px",
              fontSize: 11,
              fontWeight: 600,
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
              fontFamily: "inherit",
              background: activeTab === t.id ? "#1e293b" : "#f1f5f9",
              color: activeTab === t.id ? "#fff" : "#64748b",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === "personal" && (
        <div>
          <div style={{ marginBottom: 8 }}>
            <label style={lbl}>Ad Soyad</label>
            <input
              style={inp}
              value={cv.personal.name}
              onChange={(e) => updatePersonal("name", e.target.value)}
              placeholder="Ad Soyad"
            />
          </div>
          <div style={{ marginBottom: 8 }}>
            <label style={lbl}>Unvan</label>
            <input
              style={inp}
              value={cv.personal.title}
              onChange={(e) => updatePersonal("title", e.target.value)}
              placeholder="Yazılım Mühendisi"
            />
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <div style={{ flex: 1 }}>
              <label style={lbl}>E-posta</label>
              <input
                style={inp}
                value={cv.personal.email}
                onChange={(e) => updatePersonal("email", e.target.value)}
                placeholder="ornek@email.com"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={lbl}>Telefon</label>
              <input
                style={inp}
                value={cv.personal.phone}
                onChange={(e) => updatePersonal("phone", e.target.value)}
                placeholder="+90 5xx xxx xx xx"
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <div style={{ flex: 1 }}>
              <label style={lbl}>Konum</label>
              <input
                style={inp}
                value={cv.personal.location}
                onChange={(e) => updatePersonal("location", e.target.value)}
                placeholder="İstanbul, Turkey"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={lbl}>LinkedIn</label>
              <input
                style={inp}
                value={cv.personal.linkedin}
                onChange={(e) => updatePersonal("linkedin", e.target.value)}
                placeholder="linkedin.com/in/..."
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <div style={{ flex: 1 }}>
              <label style={lbl}>GitHub</label>
              <input
                style={inp}
                value={cv.personal.github}
                onChange={(e) => updatePersonal("github", e.target.value)}
                placeholder="github.com/..."
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={lbl}>Website</label>
              <input
                style={inp}
                value={cv.personal.website}
                onChange={(e) => updatePersonal("website", e.target.value)}
                placeholder="website.com"
              />
            </div>
          </div>
          <div style={{ marginBottom: 8 }}>
            <label style={lbl}>Özet</label>
            <textarea
              style={{ ...inp, resize: "vertical" }}
              rows={5}
              value={cv.personal.summary}
              onChange={(e) => updatePersonal("summary", e.target.value)}
              placeholder="Kendinizi kısaca tanıtın..."
            />
          </div>
        </div>
      )}

      {activeTab === "experience" && (
        <div>
          {cv.experience.map((exp, idx) => (
            <div key={exp.id} style={card}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{ fontSize: 12, fontWeight: 700, color: "#334155" }}
                >
                  Deneyim {idx + 1}
                </span>
                <button onClick={() => removeExperience(exp.id)} style={silBtn}>
                  Sil
                </button>
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <div style={{ flex: 1 }}>
                  <label style={lbl}>Şirket</label>
                  <input
                    style={inp}
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(exp.id, "company", e.target.value)
                    }
                    placeholder="Şirket Adı"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={lbl}>Pozisyon</label>
                  <input
                    style={inp}
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(exp.id, "position", e.target.value)
                    }
                    placeholder="Junior Developer"
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <div style={{ flex: 1 }}>
                  <label style={lbl}>Başlangıç</label>
                  <input
                    style={inp}
                    value={exp.startDate}
                    onChange={(e) =>
                      updateExperience(exp.id, "startDate", e.target.value)
                    }
                    placeholder="2023-07"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={lbl}>Bitiş</label>
                  <input
                    style={inp}
                    value={exp.endDate}
                    onChange={(e) =>
                      updateExperience(exp.id, "endDate", e.target.value)
                    }
                    placeholder="2024-01"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={lbl}>Konum</label>
                  <input
                    style={inp}
                    value={exp.location}
                    onChange={(e) =>
                      updateExperience(exp.id, "location", e.target.value)
                    }
                    placeholder="İstanbul"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 8,
                }}
              >
                <input
                  type="checkbox"
                  id={`cur-${exp.id}`}
                  checked={exp.current}
                  onChange={(e) =>
                    updateExperience(exp.id, "current", e.target.checked)
                  }
                />
                <label
                  htmlFor={`cur-${exp.id}`}
                  style={{ fontSize: 12, color: "#475569" }}
                >
                  Halen devam ediyor
                </label>
              </div>
              <label style={lbl}>Görev Maddeleri</label>
              {exp.bullets.map((b, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 5, marginBottom: 4 }}
                >
                  <input
                    value={b}
                    onChange={(e) => updateBullet(exp.id, i, e.target.value)}
                    placeholder="Yaptığınız görevi yazın..."
                    style={{ ...inp, fontSize: 12 }}
                  />
                  <button
                    onClick={() => removeBullet(exp.id, i)}
                    style={{ ...silBtn, padding: "0 8px" }}
                  >
                    x
                  </button>
                </div>
              ))}
              <button onClick={() => addBullet(exp.id)} style={ekleBtn}>
                + Madde Ekle
              </button>
            </div>
          ))}
          <button onClick={addExperience} style={ekleBtn}>
            + Yeni Deneyim Ekle
          </button>
        </div>
      )}

      {activeTab === "projects" && (
        <div>
          {cv.projects.map((p, idx) => (
            <div key={p.id} style={card}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{ fontSize: 12, fontWeight: 700, color: "#334155" }}
                >
                  Proje {idx + 1}
                </span>
                <button onClick={() => removeProject(p.id)} style={silBtn}>
                  Sil
                </button>
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <div style={{ flex: 2 }}>
                  <label style={lbl}>Proje Adı</label>
                  <input
                    style={inp}
                    value={p.name}
                    onChange={(e) =>
                      updateProject(p.id, "name", e.target.value)
                    }
                    placeholder="Proje Adı"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={lbl}>Başlangıç</label>
                  <input
                    style={inp}
                    value={p.startDate}
                    onChange={(e) =>
                      updateProject(p.id, "startDate", e.target.value)
                    }
                    placeholder="2023"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={lbl}>Bitiş</label>
                  <input
                    style={inp}
                    value={p.endDate}
                    onChange={(e) =>
                      updateProject(p.id, "endDate", e.target.value)
                    }
                    placeholder="2024"
                  />
                </div>
              </div>
              <div style={{ marginBottom: 8 }}>
                <label style={lbl}>Teknolojiler</label>
                <input
                  style={inp}
                  value={p.tech}
                  onChange={(e) => updateProject(p.id, "tech", e.target.value)}
                  placeholder="Python, React..."
                />
              </div>
              <label style={lbl}>Açıklama Maddeleri</label>
              {p.bullets.map((b, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 5, marginBottom: 4 }}
                >
                  <input
                    value={b}
                    onChange={(e) =>
                      updateProjectBullet(p.id, i, e.target.value)
                    }
                    placeholder="Projedeki rolünüzü yazın..."
                    style={{ ...inp, fontSize: 12 }}
                  />
                  <button
                    onClick={() => removeProjectBullet(p.id, i)}
                    style={{ ...silBtn, padding: "0 8px" }}
                  >
                    x
                  </button>
                </div>
              ))}
              <button onClick={() => addProjectBullet(p.id)} style={ekleBtn}>
                + Madde Ekle
              </button>
            </div>
          ))}
          <button onClick={addProject} style={ekleBtn}>
            + Yeni Proje Ekle
          </button>
        </div>
      )}

      {activeTab === "education" && (
        <div>
          {cv.education.map((edu, idx) => (
            <div key={edu.id} style={card}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{ fontSize: 12, fontWeight: 700, color: "#334155" }}
                >
                  Eğitim {idx + 1}
                </span>
                <button onClick={() => removeEducation(edu.id)} style={silBtn}>
                  Sil
                </button>
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <div style={{ flex: 2 }}>
                  <label style={lbl}>Bölüm / Derece</label>
                  <input
                    style={inp}
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(edu.id, "degree", e.target.value)
                    }
                    placeholder="Bilgisayar Mühendisliği"
                  />
                </div>
                <div style={{ flex: 2 }}>
                  <label style={lbl}>Okul / Üniversite</label>
                  <input
                    style={inp}
                    value={edu.school}
                    onChange={(e) =>
                      updateEducation(edu.id, "school", e.target.value)
                    }
                    placeholder="Üniversite Adı"
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <div style={{ flex: 1 }}>
                  <label style={lbl}>Başlangıç</label>
                  <input
                    style={inp}
                    value={edu.startDate}
                    onChange={(e) =>
                      updateEducation(edu.id, "startDate", e.target.value)
                    }
                    placeholder="2019"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={lbl}>Bitiş</label>
                  <input
                    style={inp}
                    value={edu.endDate}
                    onChange={(e) =>
                      updateEducation(edu.id, "endDate", e.target.value)
                    }
                    placeholder="2023"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={lbl}>GPA</label>
                  <input
                    style={inp}
                    value={edu.gpa}
                    onChange={(e) =>
                      updateEducation(edu.id, "gpa", e.target.value)
                    }
                    placeholder="3.50 / 4.00"
                  />
                </div>
              </div>
              <div style={{ marginBottom: 8 }}>
                <label style={lbl}>Konum</label>
                <input
                  style={inp}
                  value={edu.location}
                  onChange={(e) =>
                    updateEducation(edu.id, "location", e.target.value)
                  }
                  placeholder="İstanbul, Turkey"
                />
              </div>
              <div style={{ marginBottom: 8 }}>
                <label style={lbl}>Notlar (opsiyonel)</label>
                <input
                  style={inp}
                  value={edu.notes}
                  onChange={(e) =>
                    updateEducation(edu.id, "notes", e.target.value)
                  }
                  placeholder="Ödül, burs vb."
                />
              </div>
            </div>
          ))}
          <button onClick={addEducation} style={ekleBtn}>
            + Yeni Eğitim Ekle
          </button>
        </div>
      )}

      {activeTab === "skills" && (
        <div>
          <p style={{ fontSize: 11, color: "#94a3b8", marginBottom: 10 }}>
            Her beceriyi virgülle ayırın. Örnek: Python, HTML, CSS
          </p>
          {cv.skills.map((sk, idx) => (
            <div key={sk.id} style={card}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{ fontSize: 12, fontWeight: 700, color: "#334155" }}
                >
                  Kategori {idx + 1}
                </span>
                <button onClick={() => removeSkill(sk.id)} style={silBtn}>
                  Sil
                </button>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ flex: 1 }}>
                  <label style={lbl}>Kategori</label>
                  <input
                    style={inp}
                    value={sk.category}
                    onChange={(e) =>
                      updateSkill(sk.id, "category", e.target.value)
                    }
                    placeholder="Programlama Dilleri"
                  />
                </div>
                <div style={{ flex: 2 }}>
                  <label style={lbl}>Beceriler</label>
                  <input
                    style={inp}
                    value={sk.items}
                    onChange={(e) =>
                      updateSkill(sk.id, "items", e.target.value)
                    }
                    placeholder="Python, JavaScript, C#..."
                  />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addSkill} style={ekleBtn}>
            + Yeni Kategori Ekle
          </button>
        </div>
      )}

      {activeTab === "certifications" && (
        <div>
          {cv.certifications.length === 0 && (
            <p style={{ fontSize: 12, color: "#94a3b8", marginBottom: 10 }}>
              Henüz sertifika eklenmedi.
            </p>
          )}
          {cv.certifications.map((c, idx) => (
            <div key={c.id} style={card}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{ fontSize: 12, fontWeight: 700, color: "#334155" }}
                >
                  Sertifika {idx + 1}
                </span>
                <button onClick={() => removeCert(c.id)} style={silBtn}>
                  Sil
                </button>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ flex: 2 }}>
                  <label style={lbl}>Sertifika Adı</label>
                  <input
                    style={inp}
                    value={c.name}
                    onChange={(e) => updateCert(c.id, "name", e.target.value)}
                    placeholder="AWS Certified Developer"
                  />
                </div>
                <div style={{ flex: 2 }}>
                  <label style={lbl}>Veren Kurum</label>
                  <input
                    style={inp}
                    value={c.issuer}
                    onChange={(e) => updateCert(c.id, "issuer", e.target.value)}
                    placeholder="Amazon Web Services"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={lbl}>Tarih</label>
                  <input
                    style={inp}
                    value={c.date}
                    onChange={(e) => updateCert(c.id, "date", e.target.value)}
                    placeholder="2024"
                  />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addCert} style={ekleBtn}>
            + Yeni Sertifika Ekle
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [cv, setCV] = useState(defaultCV);
  const [showResetModal, setShowResetModal] = useState(false);

  const handleReset = () => {
    setCV(JSON.parse(JSON.stringify(defaultCV)));
    setShowResetModal(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #e8edf3; color: #1e293b; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        input:focus, textarea:focus { border-color: #93c5fd !important; outline: none; }
        @media print {
          @page { margin: 0; size: A4; }
          .no-print { display: none !important; }
          body { background: white !important; }
          #cv-preview { position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; max-width: 100% !important; padding: 28px 40px !important; }
        }
      `}</style>

      {/* sifırlama modali */}
      {showResetModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: "28px 32px",
              maxWidth: 380,
              width: "90%",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 12 }}>⚠️</div>
            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>
              CV'yi Sıfırla
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "#64748b",
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              Tüm bilgiler silinecek ve örnek verilerle sıfırlanacak. Bu işlem{" "}
              <strong>geri alınamaz.</strong> Devam etmek istiyor musunuz?
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <button
                onClick={() => setShowResetModal(false)}
                style={{
                  padding: "9px 22px",
                  fontSize: 13,
                  fontWeight: 600,
                  background: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                  borderRadius: 8,
                  color: "#475569",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                İptal
              </button>
              <button
                onClick={handleReset}
                style={{
                  padding: "9px 22px",
                  fontSize: 13,
                  fontWeight: 600,
                  background: "#e11d48",
                  border: "none",
                  borderRadius: 8,
                  color: "#fff",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Evet, Sıfırla
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ust bar */}
      <div
        className="no-print"
        style={{
          background: "#0f172a",
          padding: "0 24px",
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 200,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ color: "#f8fafc", fontWeight: 700, fontSize: 14 }}>
            CV Builder
          </span>
          <span
            style={{
              background: "#164e63",
              color: "#67e8f9",
              fontSize: 10,
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: 20,
            }}
          >
            ATS UYUMLU
          </span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "#475569" }}>
            Değişiklikler anında yansır
          </span>
          <button
            onClick={() => setShowResetModal(true)}
            style={{
              background: "transparent",
              color: "#94a3b8",
              border: "1px solid #334155",
              borderRadius: 7,
              padding: "7px 16px",
              fontWeight: 600,
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            ↺ Sıfırla
          </button>
          <button
            onClick={() => window.print()}
            style={{
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: 7,
              padding: "8px 20px",
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            PDF Olarak İndir
          </button>
        </div>
      </div>

      {/* ats bandi */}
      <div
        className="no-print"
        style={{
          background: "#f0fdf4",
          borderBottom: "1px solid #bbf7d0",
          padding: "7px 24px",
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, color: "#15803d" }}>
          ATS Modu Aktif:
        </span>
        <span style={{ fontSize: 11, color: "#166534" }}>
          Fotoğraf, ikon ve renk sütunu yok. Tek sütun, standart font, makine
          tarafından tam okunabilir format.
        </span>
      </div>

      {/* ana layout */}
      <div style={{ display: "flex", height: "calc(100vh - 82px)" }}>
        <div
          className="no-print"
          style={{
            width: 430,
            minWidth: 320,
            background: "#fff",
            borderRight: "1px solid #e2e8f0",
            overflowY: "auto",
            flexShrink: 0,
          }}
        >
          <EditorPanel cv={cv} setCV={setCV} />
        </div>
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            background: "#e8edf3",
            padding: "28px 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              background: "#fff",
              boxShadow: "0 2px 20px rgba(0,0,0,0.10)",
              width: "100%",
              maxWidth: 740,
            }}
          >
            <CVPreview cv={cv} />
          </div>
        </div>
      </div>
    </>
  );
}
