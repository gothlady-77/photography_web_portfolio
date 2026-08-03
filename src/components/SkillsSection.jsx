import { useState } from 'react'; 
import { cn } from '@/lib/utils';

const skills = [
  // Post-Production
  {name: 'Photoshop', level: '85', category: 'Post-Production'},
  {name: 'GIMP', level: '75', category: 'Post-Production'},

  // Photography
  {name: 'Camera Settings', level: '100', category: 'Photography'},
  {name: 'Composition', level: '100', category: 'Photography'},
  {name: 'Prop Work', level: '90', category: 'Photography'},
  {name: 'Lighting', level: '85', category: 'Photography'},
  {name: 'Theory', level: '75', category: 'Photography'},

  // Soft-Skills
  {name: 'Communication', level: '90', category: 'Soft-Skills'},
  {name: 'Time Management', level: '85', category: 'Soft-Skills'},
  {name: 'Creativity', level: '80', category: 'Soft-Skills'},
  {name: 'Planning', level: '75', category: 'Soft-Skills'},
];

const categories = ["All", "Post-Production", "Photography", "Soft-Skills"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>  
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button 
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary/70 text-foreground hover:bg-secondary" 
              )}
            >
              {category}
            </button>    
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div 
              key={key} 
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground"> {skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};