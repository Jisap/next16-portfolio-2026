"use client"

import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { contactPageStyles as c, contactPageStyles } from "../data/dummyStyles";



const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [focused, setFocused] = useState<string | null>(null)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLICK_KEY
    if (publicKey) emailjs.init(publicKey)
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    const serviceId = "service_lsy2379";
    const templateId = "template021y1sf";

    try {
      if (!serviceId || !templateId) throw new Error("Missing service or template ID");

      await emailjs.send(serviceId, templateId, templateParams);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFocused(null);

      alert("Message sent successfully!");

    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const getLabelClass = (fieldName: string) => {
    const baseClass = c.formLabelBase;
    const focusedClass = focused === fieldName || formData[fieldName as keyof typeof formData] ? c.formLabelFocused : c.formLabelUnfocused
    return `${baseClass} ${focusedClass}`
  }


  return (
    <div>

    </div>
  )
}

export default Contact