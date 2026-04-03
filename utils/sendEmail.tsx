import EmailTemplate from "@/emails/emailTemplate";
import resend from "./resend";

interface EmailTemplateProps {
  email: string;
  message: string;
}

export async function sendEmail({ email, message }: EmailTemplateProps) {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "syedsaadaliaskari@gmail.com",
      subject: "Contact Form Submission",
      react: <EmailTemplate email={email} message={message} />,
    });

    if (data.error) {
      return { success: false, message: data.error.message };
    }

    return { success: true, message: "Email sent successfully !" };
  } catch (emailError) {
    console.error("Error while sending the email", emailError);
    return { success: false, message: "Error while sending gmail" };
  }
}
