import { Code, User, Briefcase } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-r relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Photographer
            </h3>

            <p className="text-muted-foreground">
              I am a passionate photographer with a keen eye for detail and a love for capturing 
              moments that tell stories. With over 5 years of experience in the field, 
              I have had the privilege of working with various clients to bring their visions 
              to life through the lens.
            </p>

            <p className="text-muted-foreground">
              My journey in photography began as a hobby, but it quickly evolved into 
              my freelance career. I specialize in portrait and landscape photography, always striving to 
              create images that evoke emotion and leave a lasting impression.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" 
              className="cosmic-button"
              >
                Contact Me
              </a>
              
              <a 
                href="" 
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                My Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> 
                    Photography
                  </h4>
                  <p className="text-muted-foreground">
                    Specializing in portrait and landscape photography
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> 
                    Client Relations
                  </h4>
                  <p className="text-muted-foreground">
                    Building strong relationships with clients to understand their vision
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Business Development
                  </h4>
                  <p className="text-muted-foreground">
                    Growing my photography business and exploring new opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};