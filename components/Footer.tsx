export function Footer() {
  return (
    <footer className="bg-indigo-900 text-white flex flex-col md:flex-row justify-between items-start md:items-center px-8 py-8 mt-10">
      <div className="space-y-1 text-sm">
        <p>Phone – 6338 0886</p>
        <p>Fax – 6338 0887</p>
        <p>5 Mandarin Avenue, Marina Square</p>
        <p>jimi@goodhost.com</p>
      </div>

      <div className="text-center md:text-left mt-4 md:mt-0">
        <p className="font-semibold">Hours:</p>
        <p>Mon–Fri: 9 am – 5 pm</p>
        <p>Sat: 10 am – 3 pm</p>
        <p>Sun: Closed</p>
      </div>

      <div className="flex space-x-4 text-2xl mt-4 md:mt-0">
      </div>
    </footer>
  );
};

