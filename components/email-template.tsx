interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({
  name,
  phone,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#6B3D2E",
            color: "#ffffff",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>Nuevo mensaje de contacto</h2>
        </div>

        {/* Body */}
        <div style={{ padding: "20px", color: "#333" }}>
          <p>Has recibido un nuevo mensaje desde tu formulario de contacto:</p>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <tbody>
              <tr>
                <td style={labelStyle}>Nombre:</td>
                <td style={valueStyle}>{name}</td>
              </tr>
              <tr>
                <td style={labelStyle}>Teléfono:</td>
                <td style={valueStyle}>{phone}</td>
              </tr>
              <tr>
                <td style={labelStyle}>Correo:</td>
                <td style={valueStyle}>{email}</td>
              </tr>
              <tr>
                <td style={labelStyle}>Asunto:</td>
                <td style={valueStyle}>{subject}</td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: "20px" }}>
            <p style={{ ...labelStyle, marginBottom: "5px" }}>Mensaje:</p>
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "15px",
                borderRadius: "5px",
                whiteSpace: "pre-line",
              }}
            >
              {message}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#f4f4f4",
            padding: "15px",
            textAlign: "center",
            fontSize: "12px",
            color: "#777",
          }}
        >
          Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
        </div>
      </div>
    </div>
  );
}

const labelStyle = {
  fontWeight: "bold" as const,
  padding: "8px 0",
  width: "120px",
  verticalAlign: "top" as const,
};

const valueStyle = {
  padding: "8px 0",
};