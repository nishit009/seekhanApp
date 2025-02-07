import React from "react";

function About() {
  return (
    <>
      {/* Header Section */}
      <header className="w-full bg-black py-6 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">About Project Seekhan</h1>
      </header>

      {/* Main Content */}
      <div className="bg-black text-white py-12 px-6 min-h-screen flex justify-center">
        <div className="max-w-4xl w-full">
          {/* Introduction */}
          <section className="mb-10 text-center">
            <p className="text-xl font-medium">
              <strong>Project Seekhan</strong> is an AI-powered tool designed to 
              revolutionize **quiz creation** for educators, students, and lifelong learners. 
              Using **generative AI**, it automates quiz generation, making learning 
              interactive and **efficient**.
            </p>
          </section>

          {/* Vision */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-center">Our Vision</h2>
            <p className="text-lg text-gray-300 text-center">
              To **simplify** and **enhance** learning through AI-driven **quiz automation**, 
              allowing users to create **custom quizzes** without external dependencies.
            </p>
          </section>

          {/* Features */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-center">Key Features</h2>
            <ul className="list-disc pl-6 text-lg space-y-3">
              <li>
                <strong>📝 Topic-Based Quiz Generation:</strong> Enter a topic, and AI generates 
                **custom** questions across multiple difficulty levels.
              </li>
              <li>
                <strong>⚙️ Customizable Quizzes:</strong> Adjust **complexity & format** 
                to match learning needs.
              </li>
              <li>
                <strong>🧠 AI-Driven Insights:</strong> Uses **fine-tuned AI models** for 
                precise & **context-aware** question generation.
              </li>
              <li>
                <strong>📶 Offline Capability:</strong> Works **without the internet**, 
                ensuring **privacy & accessibility**.
              </li>
            </ul>
          </section>

          {/* Technology Stack */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-center">Technology Stack</h2>
            <ul className="list-disc pl-6 text-lg space-y-3">
              <li><strong>🚀 AI Model:</strong> LLaMA 2 (fine-tuned for quiz generation).</li>
              <li><strong>🖥 Hardware Requirements:</strong> Min **4GB 3050Ti GPU** & **16GB RAM**.</li>
              <li><strong>📊 Dataset:</strong> Custom-built **CS & programming-focused dataset**.</li>
            </ul>
          </section>

          {/* Benefits */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-center">Why Choose Project Seekhan?</h2>
            <ul className="list-disc pl-6 text-lg space-y-3">
              <li><strong>⏳ Saves Time:</strong> AI automates **question creation** instantly.</li>
              <li><strong>🎯 Personalized Learning:</strong> Generates **tailored quizzes** for specific needs.</li>
              <li><strong>🔒 Privacy First:</strong> Works **without external APIs**, ensuring **data security**.</li>
              <li><strong>📝 Interactive Engagement:</strong> Supports **varied question formats** for better learning.</li>
            </ul>
          </section>

          {/* Use Cases */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-center">Who Can Benefit?</h2>
            <ul className="list-disc pl-6 text-lg space-y-3">
              <li><strong>👩‍🏫 Educators:</strong> Easily create quizzes for **classroom or online learning**.</li>
              <li><strong>📚 Students:</strong> Practice topics or **prepare for exams** efficiently.</li>
              <li><strong>🏢 Corporate Training:</strong> Create assessments for **employee skill development**.</li>
            </ul>
          </section>

          {/* Closing Statement */}
          <section className="text-center text-xl font-semibold">
            <p>
              <strong>Project Seekhan</strong> is your **gateway to smarter learning**.  
              With AI-powered **automation and customization**, it makes quiz creation 
              **simple, effective, and engaging**.
            </p>
            <p className="mt-4">📚 Let's redefine **education together**! 🚀</p>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
