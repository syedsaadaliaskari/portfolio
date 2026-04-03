import { Body, Font, Head, Html, Tailwind } from "@react-email/components";

interface EmailTemplateProps {
  email: string;
  message: string;
}

export default function EmailTemplate({ email, message }: EmailTemplateProps) {
  return (
    <>
      <Html lang="en">
        <Head>
          <Font
            fontFamily="Lusitana"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/lusitana/v15/Kmu6P29dw06D2BctfWv8p_fI.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>

        <Tailwind>
          <Body className="bg-gray-100 font-sans rounded-3xl p-10">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold mb-4">
                New Contact Form Submission
              </h1>
              <p className="mb-2">
                <strong>Email:</strong> {email}
              </p>
              <p className="mb-4">
                <strong>Message:</strong> {message}
              </p>
            </div>
          </Body>
        </Tailwind>
      </Html>
    </>
  );
}
