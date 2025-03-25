import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Career = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const timeline = [
    {
      date: "May 2022",
      title: "Lead Web Developer",
      description:
        "Served as Lead Web Developer at my high school, managing and enhancing the school's online presence.",
      longDescription: `Developed strong expertise in Python, Django, MySQL, and JavaScript, with a solid foundation taught by my high school faculty. 
        As Lead Web Developer, I utilized these skills to elevate the school’s online presence, ensuring the website remained visually appealing, error-free, and fully functional. 
        Managed a dynamic, regularly updated database that reflected real-time information, such as school events, announcements, and other essential data, providing a seamless, engaging, and professional digital experience that aligned with the school’s values and commitment to quality.
        `,
      type: "work",
      icon: "👨🏻‍💻",
    },
    {
      date: "July 2022",
      title: "Head Boy",
      description:
        "Elected as the Head Boy by the Principal during my senior year of High School.",
      longDescription: `Collaborated closely with the school prefects to maintain a well-organized, supportive school environment and address student concerns. 
        Led student gatherings, organized school-wide events like assemblies and cultural activities, and coordinated meetings to enhance community involvement and school spirit. 
        Played a key role in making daily announcements, ensuring clear communication across the school, fostering a positive atmosphere, and actively promoting engagement and unity among students and staff.
        `,
      type: "project",
      icon: "🎖️",
    },
    {
      date: "December 2022",
      title: "$100k Merit Scholarship",
      description:
        "Honored with a $100k Maverick Academic Scholarship at UTA in recognition of my achievements.",
      longDescription: `Honored with the Maverick Academic Scholarship at University of Texas at Arlington in recognition of a perfect 4.0 GPA and graduating as valedictorian with a class rank of 1/90. I received scholarship offers from seven universities, with this being the highest award. Throughout high school, I served as Head Boy, led the kabaddi team as captain, and actively worked to foster a supportive, spirited school environment. My leadership roles allowed me to inspire teamwork, encourage resilience, and contribute meaningfully to our school’s community and culture.`,
      type: "education",
      icon: "🏆",
    },
    {
      date: "May 2023",
      title: "Graduated High School",
      description:
        "Graduated High School with a perfect 4.0 GPA, ranking 1st in a class of 90 students.",
      longDescription: `Graduated from B.D. Memorial English High School, excelling academically with top scores in Physics, Chemistry, Maths, Computer Science, and English. 
        Served as captain of the school’s kabaddi team, leading us to numerous victories in zonal and inter-zonal competitions and fostering a spirit of teamwork and resilience. 
        Additionally, took on the role of lead web developer, enhancing the school’s digital presence. Achieved a perfect 4.0 GPA and graduated 1st in a class of 90 students, recognized for both academic and extracurricular contributions.`,
      type: "achievement",
      icon: "🎓",
    },
    {
      date: "August 2023",
      title: "Started BS in CS at UTA",
      description:
        "Began my Bachelor’s in Computer Science at UT Arlington, adapting to life in Arlington, TX.",
      longDescription: `Embarked on my academic journey in Arlington, Texas on August 5th, 2023. Quickly adapted to the new environment despite the challenging Texas summer heat. Actively participated in the university orientation on August 8th, forming valuable connections with fellow students. Experienced the vibrant campus life with over 30,000 students during the first day of classes on August 21st. Made a conscious decision to maximize my university experience by planning to engage in various student organizations and campus activities. This transition marked my first step into higher education and public university culture.`,
      type: "education",
      icon: "✈️",
    },
    {
      date: "January 2024",
      title: "Orientation Leader",
      description:
        "Chosen to serve as an Orientation Leader at UTA, guiding incoming students in their university journey.",
      longDescription: `Secured a prestigious role as an Orientation Leader at the University of Texas at Arlington, progressing from attending orientations myself to leading them. Underwent an intensive training program from January to May 2024 to develop strong interpersonal and communication skills. Promoted university resources and opportunities, provided guidance and support to new students and their families, and organized group activities to foster engagement. This role highlights my leadership abilities and deep knowledge of university culture, allowing me to positively impact new students’ transitions to university life during the Summer 2024 orientation sessions.
`,
      type: "work",
      icon: "✨",
    },
    {
      "date": "January 2024",
      "title": "Undergraduate Research Mav",
      "description": "Started my first on-campus job as a Research Mav where I optimized research workflows at UTA.",
      "longDescription": "Contributed to UTA's research department by managing 24/7 live chat systems, gaining hands-on experience with server-side and user-side interfaces. Integrated multiple databases and tools to streamline research workflows, significantly improving data retrieval efficiency. Implemented technical solutions that reduced data processing time by 40% and enhanced scheduling efficiency by 30%. Coordinated patron appointments using various platforms, while optimizing communication systems and research support processes. Demonstrated strong technical aptitude in improving customer interaction platforms and database management systems.",
      "type": "project",
      "icon": "🔬"
    },
    {
      date: "August 2024",
      title: "IT Administrative Support",
      description:
        "Improved lab software using Python and JavaScript, boosting efficiency and user experience.",
      longDescription: `In my role as IT Administrative Support at UTA, I utilized Python and JavaScript to maintain and update lab software applications. I developed scripts to automate routine maintenance tasks, significantly enhancing system efficiency and reducing downtime. Collaborating with the IT team to deploy and configure software systems, I helped improve user experience by 50%. Providing technical assistance to students and faculty allowed me to ensure optimal functionality of lab applications. This experience strengthened my coding skills in web development, automation, and system integration within an academic environment, contributing to seamless operations across multiple labs.`,
      type: "education",
      icon: "💻",
    },
    // ... rest of the timeline items with similar detailed longDescription
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  React.useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      checkScroll(); // Initial check
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const getTypeColor = (type: string) => {
    const colors = {
      education:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200",
      achievement:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200",
      project:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
      work: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200",
    };
    return colors[type as keyof typeof colors];
  };

  return (
    <div className="min-h-screen py-16 relative">
      <motion.h1
        className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Journey
      </motion.h1>

      {/* Timeline Navigation */}
      <AnimatePresence>
        {canScrollLeft && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={() => scroll("left")}
            className="absolute left-4 z-10 group -translate-y-1/2"
            style={{ top: "57%" }}
          >
            <div
              className="relative p-4 rounded-full bg-white/5 backdrop-blur-lg border border-white/10
              shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]
              transform transition-all duration-300 group-hover:scale-110"
            >
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                blur-xl group-hover:blur-2xl transition-all duration-300"
              />
              <ChevronLeft className="w-6 h-6 relative z-10 text-gray-800 dark:text-gray-200" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {canScrollRight && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={() => scroll("right")}
            className="absolute right-4 z-10 group -translate-y-1/2"
            style={{ top: "57%" }}
          >
            <div
              className="relative p-4 rounded-full bg-white/5 backdrop-blur-lg border border-white/10
              shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]
              transform transition-all duration-300 group-hover:scale-110"
            >
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                blur-xl group-hover:blur-2xl transition-all duration-300"
              />
              <ChevronRight className="w-6 h-6 relative z-10 text-gray-800 dark:text-gray-200" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Timeline Content */}
      <div
        ref={scrollRef}
        className="relative flex overflow-x-scroll pb-8 hide-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex space-x-8 px-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-none w-80"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedItem(index)}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 relative
                  border border-gray-200 dark:border-gray-700 cursor-pointer
                  transform transition-transform duration-300 transition-none
                  ${
                    selectedItem === index
                      ? "ring-2 ring-blue-500 dark:ring-blue-400"
                      : ""
                  }
                  hover:shadow-2xl hover:-translate-y-1`}
              >
                {/* Timeline Connector */}
                {index < timeline.length - 1 && (
                  <div
                    className="absolute top-1/2 -right-8 w-8 h-0.5 
                    bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 transition-none"
                  />
                )}

                {/* Icon */}
                <div
                  className="text-4xl mb-4 transform transition-transform duration-300
                  group-hover:scale-110"
                >
                  {item.icon}
                </div>

                {/* Date Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3
                  ${getTypeColor(item.type)} transition-none`}
                >
                  {item.date}
                </span>

                <h3 className="text-xl font-semibold mb-2 transition-none">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-none">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected Item Details */}
      <AnimatePresence mode="wait">
        {timeline[selectedItem] && (
          <motion.div
            key={selectedItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 mx-auto max-w-3xl p-6 bg-white/50 dark:bg-gray-800/50 
              backdrop-blur-lg rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {timeline[selectedItem].title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {timeline[selectedItem].longDescription}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Career;
