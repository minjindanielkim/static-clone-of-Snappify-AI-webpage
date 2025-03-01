// pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Snappify - Beautiful Code Snippets</title>
        <meta
          name="description"
          content="Create and share stunning code snippets with Snappify."
        />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Snappify</h1>
        <div>
          <a
            href="#"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700"
          >
            Try for Free
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Create Beautiful Code Snippets
        </h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Snappify makes it easy to generate stunning code snapshots, perfect for
          sharing on social media or documentation.
        </p>
        <a
          href="#"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200"
        >
          Get Started
        </a>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-black text-3xl font-bold">Why Use Snappify?</h2>
          <div className="grid md:grid-cols-4 gap-9 mt-9">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-black text-xl font-semibold">Create next-level presentations</h3>
              <p className="text-gray-600 mt-2">
                Say goodbye to boring presentations created with PowerPoint or Keynote. 👋
                Snappify enables you to create stunning presentations, with first-class support for code snippets. 
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-black text-xl font-semibold">Elevate your Technical Content</h3>
                <p className="text-gray-600 mt-2">
                  You're a developer, looking to create visually engaging infographics for social media?
                  Use snappify to create stunning visuals of your technical concepts, that will engage your followers and take your social media presence to the next level.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-black text-xl font-semibold">Simplify your Education</h3>
              <p className="text-gray-600 mt-2">
                Are you a teacher or course creator looking to help your students better understand technical concepts?
                Snappify makes it easy to create educational content that lets your students retain information and grasp complex ideas. 
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-black text-xl font-semibold">Embed Interactive infographics</h3>
              <p className="text-gray-600 mt-2">
                Snappify enables you to embed your visuals in a way that your viewers can easily copy code snippets or texts.
                It's the perfect way to bring your blog to life or spice up your internal company documentation using rich infographics. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Get Started for Free</h2>
          <p className="text-lg mt-4">
            Start creating and sharing beautiful code snippets today!
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>&copy; {new Date().getFullYear()} Snappify. All rights reserved.</p>
      </footer>
    </div>
  );
}

