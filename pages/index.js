import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <div class="sm:py-2 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-l flex items-center space-x-4">
        <div class="flex-shrink-1">
          <img class="h-12 w-12" src="/vercel.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <div class="py-4 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 my-2">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0 m"
          src="/woman-face.jpg"
          alt="Woman's Face"
        />
        <div class="py-8 text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">Erin Lindford</p>
            <p class="text-gray-500 font-medium">Product Engineer</p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
      <div class="group max-w-xs text-center mx-auto border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent">
        <p class="text-indigo-600 group-hover:text-gray-900 ">New Project</p>
        <p class="text-indigo-500 group-hover:text-gray-500 ">
          Create a new project from a variety of starting templates.
        </p>
      </div>
    </main>
  );
}
