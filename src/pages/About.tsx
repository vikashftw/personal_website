import { motion } from 'framer-motion';

const About = () => {
  const courses = [
    { name: "Data Structures & Algorithms", description: "Complex problem-solving and optimization techniques" },
    { name: "Object-Oriented Programming", description: "Building scalable systems with object-oriented design" },
    { name: "Fundamentals of Software Engineering", description: "Software development and team collaboration" },
    { name: "Database Systems and File Structures", description: "Designing robust databases and managing file systems" }
  ];

  const skills = [
    { name: "MERN Stack", level: 97 },
    { name: "Javascript/Java/Python/C/C++", level: 97 },
    { name: "Flask/Django/MySQL", level: 97 },
    { name: "Data Structures & Algorithms", level: 95 },
    { name: "AI & Machine Learning", level: 93 },
    { name: "Git Version Control", level: 93 },
    { name: "AWS Deployment", level: 90 }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto py-8"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Coursework Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">Relevant Coursework</h3>
          <div className="space-y-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{ transition: 'none', WebkitTransition: 'none' }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg 
                hover:shadow-xl hover:shadow-gray-300 dark:hover:shadow-gray-900
                transform hover:-translate-y-1 group"
              >
                <h4 style={{ transition: 'none', WebkitTransition: 'none' }} 
                    className="text-lg font-semibold mb-2">{course.name}</h4>
                <p style={{ transition: 'none', WebkitTransition: 'none' }}
                   className="text-gray-600 dark:text-gray-400">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 
                      dark:to-blue-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;