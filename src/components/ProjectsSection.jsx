
const projects = [
    {
      id: 1,
      title: "Anna",
      image: "/projects/AnnaNW.jpg",
      tags: ["Animal", "Portrait"],
    },
    {
      id: 2,
      title: "Aria",
      image: "/projects/AriaNW.jpg",
      tags: ["Family", "Portrait"],
    },
    {
      id: 3,
      title: "Bride and Groom",
      image: "/projects/FrontNW.jpg",
      tags: ["Wedding", "Portrait"],
    },
    {
      id: 4,
      title: "Newlyweds and Family 1",
      image: "/projects/Tobylily1NW.jpg",
      tags: ["Family", "Wedding", "Portrait"],
    },
    {
      id: 5,
      title: "Newlyweds and Family 2",
      image: "/projects/Tobylily2NW.jpg",
      tags: ["Family", "Wedding", "Portrait"],
    },
    {
      id: 6,
      title: "Newlyweds and Family 3",
      image: "/projects/Tobylily3NW.jpg",
      tags: ["Family", "Wedding", "Portrait"],
    },
    {
      id: 7,
      title: "Newlyweds and Family 4",
      image: "/projects/Tobylily4NW.jpg",
      tags: ["Family", "Wedding", "Portrait"],
    },
    {
      id: 8,
      title: "Group Photo",
      image: "/projects/GroupNW.jpg",
      tags: ["Family", "Wedding", "Group"],
    },
    {
      id: 9,
      title: "Lonely Rose",
      image: "/projects/singlerose.jpg",
      tags: ["Floral", "Still-Life", "Surreal"],
    },
    {
      id: 10,
      title: "Floral Still-Life",
      image: "/projects/manyflowers.jpg",
      tags: ["Floral", "Still-Life", "Surreal"],
    },
    {
      id: 11,
      title: "Bouquet in the Windowsill",
      image: "/projects/RosesInWindow.jpg",
      tags: ["Floral", "Still-Life"],
    },
    {
      id: 12,
      title: "Sci-Fi Perspective",
      image: "/projects/scifi.jpg",
      tags: ["Surreal", "Abstract", "Still-Life"],
    },
    {
      id: 13,
      title: "Colorful Sunset",
      image: "/projects/colorfulsky.jpg",
      tags: ["Nature", "Surreal", "Still-Life"],
    },
    {
      id: 14,
      title: "Falltime",
      image: "/projects/falltime.jpg",
      tags: ["Nature", "Surreal", "Still-Life"],
    },
    {
      id: 15,
      title: "Squirrel",
      image: "/projects/critter.jpg",
      tags: ["Nature", "Animal"],
    },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
          Featured <span className="text-primary"> Photos </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here is a showcase of my favorite photos. Each photo displays my 
          experience working with a slew of genres.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div 
              key={key} 
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              

              <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
        
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};