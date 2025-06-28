import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input'; 
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/firebase'; // Ensure the path is correct
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const contactCollectionRef = collection(db, 'contact');

      await addDoc(contactCollectionRef, {
        ...formData,
        submittedAt: Timestamp.now(),
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Error adding document: ", err);
      setErrors({ submit: "There was an error submitting your message. Please try again." });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact"
      className="bg-primary text-primary-foreground min-h-screen py-8 md:py-24 flex flex-col items-center justify-center space-y-8"
    >
      <div className="container px-4 md:px-6 space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center" data-aos="fade-up">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-center md:text-left">Get in Touch</h3>
            <p className="text-center md:text-left">
              Whether you have a question, want to join the club, or collaborate on a project, feel free to reach out to us!
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Follow Us:</h4>
              <p className="flex justify-center md:justify-start space-x-2">
                <Link
                  href="https://www.linkedin.com/company/club-celestius-cit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </Link>
                <span>|</span>
                <Link
                  href="https://x.com/celestius_cit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </Link>
                <span>|</span>
                <Link
                  href="https://www.instagram.com/celestius.cit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </Link>
              </p>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <Label htmlFor="name" className="text-primary-foreground">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-primary-foreground text-primary"
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-primary-foreground">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Your Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-primary-foreground text-primary"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="message" className="text-primary-foreground">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="bg-primary-foreground text-primary"
                required
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            {errors.submit && <p className="text-red-500">{errors.submit}</p>}
            {success && <p className="text-green-500">Your message has been sent successfully!</p>}
            <Button type="submit" variant="secondary" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;