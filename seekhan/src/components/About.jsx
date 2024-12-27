import NavBar from "./NavBar";
import Footer from "./Footer";
import imagepath from "./assets/projectseekhan_logo.png";

function About() {
  return (
    <>
      <header className="w-full h-auto bg-black flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          <p className="mt-4 text-white text-4xl font-semibold">
            About Project Seekhan
          </p>
        </div>
      </header>
      <div
        className="bg-black py-8 px-4 min-h-screen overflow-y-auto"
        style={{ marginTop: "-20px" }}
      >
        <div className="max-w-2xl mx-auto text-white">
          <div className="mt-4 text-xl font-medium text-center">
            <strong>Project Seekhan</strong> is an innovative tool designed to
            transform the way quizzes are created and consumed. Built on the
            principles of generative artificial intelligence, the project aims
            to provide a seamless, interactive, and efficient solution for
            educators, students, and lifelong learners by enabling automatic
            quiz generation based on user-provided topics.
          </div>

          <div className="mt-4 text-lg font-medium text-center">
            <strong>Vision:</strong>
            The vision of Project Seekhan is to foster active learning and
            engagement by leveraging advanced AI technologies to simplify quiz
            creation. It empowers users to create tailored quizzes without
            relying on external APIs or pre-existing quiz databases, ensuring a
            focused and secure learning environment.
          </div>

          <div className="mt-4 text-lg font-medium text-center">
            <strong>Features:</strong>
            <ul className="list-disc pl-8">
              <li>
                <strong>Topic-Based Quiz Generation</strong>: Users can input a
                topic, and the tool generates questions specific to that topic,
                covering various difficulty levels.
              </li>
              <li>
                <strong>Customizable Quizzes</strong>: Generated quizzes can be
                adjusted for complexity, ensuring relevance for different user
                groups.
              </li>
              <li>
                <strong>AI-Driven Insights</strong>: The system leverages
                fine-tuned AI models for accurate and context-aware question
                generation.
              </li>
              <li>
                <strong>Standalone System</strong>: Designed to work offline,
                ensuring privacy and accessibility without requiring internet
                connectivity.
              </li>
            </ul>
          </div>

          <div className="mt-4 text-lg font-medium text-center">
            <strong>Technology Stack:</strong>
            <ul className="list-disc pl-8">
              <li>
                <strong>Model:</strong> LLaMA 2 (fine-tuned for quiz generation)
              </li>
              <li>
                <strong>Hardware Requirements:</strong> Compatible with systems
                having at least a 4GB 3050ti graphics card and 16GB RAM.
              </li>
              <li>
                <strong>Dataset:</strong> Custom-built dataset focused on
                computer science, coding, and programming topics to enhance the
                relevance and quality of generated quizzes.
              </li>
            </ul>
          </div>

          <div className="mt-4 text-lg font-medium text-center">
            <strong>Benefits:</strong>
            <ul className="list-disc pl-8">
              <li>
                <strong>Time Efficiency</strong>: Save time by automating the
                quiz creation process.
              </li>
              <li>
                <strong>Personalized Learning</strong>: Generate quizzes that
                cater to specific learning objectives.
              </li>
              <li>
                <strong>No External Dependencies</strong>: Operates without
                external APIs, ensuring data security and privacy.
              </li>
              <li>
                <strong>Interactive Engagement</strong>: Encourages active
                learning through varied question formats and levels.
              </li>
            </ul>
          </div>

          <div className="mt-4 text-lg font-medium text-center">
            <strong>Use Cases:</strong>
            <ul className="list-disc pl-8">
              <li>
                <strong>Educators:</strong> Quickly create quizzes for classroom
                or remote learning.
              </li>
              <li>
                <strong>Students:</strong> Test knowledge on specific subjects
                or prepare for exams.
              </li>
              <li>
                <strong>Corporate Training:</strong> Develop targeted
                assessments for professional development programs.
              </li>
            </ul>
          </div>

          <div className="mt-4 text-lg font-medium text-center">
            <strong>Development Goals:</strong>
            <ul className="list-disc pl-8">
              <li>
                <strong>Expand Dataset:</strong> Enrich the dataset to cover
                broader topics and disciplines.
              </li>
              <li>
                <strong>Enhance Model Accuracy:</strong> Continuously fine-tune
                the model to improve question relevance and quality.
              </li>
              <li>
                <strong>User-Friendly Interface:</strong> Develop an intuitive
                interface for ease of use by non-technical users.
              </li>
            </ul>
          </div>

          <div className="mt-4 text-xl font-semibold text-center">
            Project Seekhan is your gateway to smarter learning. With
            cutting-edge AI at its core, it transforms learning experiences by
            making quiz creation simple, effective, and interactive. Together,
            let's redefine the future of education.
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
