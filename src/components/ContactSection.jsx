import { Mail, Send } from "lucide-react";
import { SiInstagram, SiBluesky } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    Promise.all([
      emailjs.sendForm(serviceId, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, publicKey),
      emailjs.sendForm(serviceId, import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID, formRef.current, publicKey),
    ])
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message! I'll get back to you soon.",
        });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast({
          title: "Something went wrong",
          description: "Please try again or email me directly.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section 
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-[clamp(0.875rem,2.5vw,1rem)]">
          Interested in booking a session? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold mb-6"> 
              Contact Information
            </h3>
            
            <div className="space-y-4 sm:space-y-6 justify-center">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-[clamp(0.5rem,1.5vw,0.75rem)] rounded-full bg-primary/20 shrink-0"> 
                  <Mail className="h-[clamp(1.1rem,3.5vw,1.5rem)] w-[clamp(1.1rem,3.5vw,1.5rem)] text-primary" />
                </div>
                <div className="min-w-0">
                    <h4 className="font-medium text-[clamp(0.9rem,2.5vw,1rem)]"> Email</h4>
                    <a 
                      href="mailto:Freyaprimsphotography@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors text-[clamp(0.8rem,2.5vw,1rem)] break-all"
                    >
                      Freyaprimsphotography@gmail.com 
                    </a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-[clamp(0.5rem,1.5vw,0.75rem)] rounded-full bg-primary/20 shrink-0"> 
                  <SiInstagram className="h-[clamp(1.1rem,3.5vw,1.5rem)] w-[clamp(1.1rem,3.5vw,1.5rem)] text-primary" />
                </div>
                <div className="min-w-0">
                    <h4 className="font-medium text-[clamp(0.9rem,2.5vw,1rem)]"> Instagram</h4>
                    <a 
                      href="https://www.instagram.com/freyaprimrosesphotography?igsh=MW1rODJ5am5yZHdibA==" 
                      className="text-muted-foreground hover:text-primary transition-colors text-[clamp(0.8rem,2.5vw,1rem)] break-all"
                    >
                      @freyaprimrosesphotography
                    </a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-[clamp(0.5rem,1.5vw,0.75rem)] rounded-full bg-primary/20 shrink-0"> 
                  <SiBluesky className="h-[clamp(1.1rem,3.5vw,1.5rem)] w-[clamp(1.1rem,3.5vw,1.5rem)] text-primary" />
                </div>
                <div className="min-w-0">
                    <h4 className="font-medium text-[clamp(0.9rem,2.5vw,1rem)]"> Bluesky</h4>
                    <a 
                      href="https://bsky.app/profile/freyasphotography.bsky.social" 
                      className="text-muted-foreground hover:text-primary transition-colors text-[clamp(0.8rem,2.5vw,1rem)] break-all"
                    >
                      @freyasphotography.bsky.social 
                    </a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-[clamp(0.5rem,1.5vw,0.75rem)] rounded-full bg-primary/20 shrink-0"> 
                  <FaLinkedin className="h-[clamp(1.1rem,3.5vw,1.5rem)] w-[clamp(1.1rem,3.5vw,1.5rem)] text-primary" />
                </div>
                <div className="min-w-0">
                    <h4 className="font-medium text-[clamp(0.9rem,2.5vw,1rem)]"> LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/freya-mason-304283426?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                      className="text-muted-foreground hover:text-primary transition-colors text-[clamp(0.8rem,2.5vw,1rem)] break-all"
                    >
                      @freyaprimrosesphotography
                    </a>
                </div>
              </div>
            </div>
          </div>

            <div className="bg-card p-[clamp(1.25rem,4vw,2rem)] rounded-lg shadow-xs">
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold mb-6"> Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-[clamp(0.8rem,2.5vw,0.875rem)] font-medium mb-2"
                  > 
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required 
                    className="w-full px-[clamp(0.75rem,3vw,1rem)] py-[clamp(0.5rem,2vw,0.75rem)] text-[clamp(0.875rem,2.5vw,1rem)] rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Freya Mason..."
                  />
                </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-[clamp(0.8rem,2.5vw,0.875rem)] font-medium mb-2"
                > 
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  required 
                  className="w-full px-[clamp(0.75rem,3vw,1rem)] py-[clamp(0.5rem,2vw,0.75rem)] text-[clamp(0.875rem,2.5vw,1rem)] rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="youremail@gmail.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-[clamp(0.8rem,2.5vw,0.875rem)] font-medium mb-2"
                > 
                  Your Message
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  required 
                  rows={5}
                  className="w-full px-[clamp(0.75rem,3vw,1rem)] py-[clamp(0.5rem,2vw,0.75rem)] text-[clamp(0.875rem,2.5vw,1rem)] rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hi, let's chat..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting} 
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 text-[clamp(0.875rem,2.5vw,1rem)] py-[clamp(0.5rem,2vw,0.75rem)]",
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};