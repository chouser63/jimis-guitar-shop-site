export function Footer() {
  return (
    <footer className="bg-indigo-900 text-white flex flex-col space-y-4 md:flex-row justify-between items-start md:items-center px-8 py-8 mt-10">
      <div className="space-y-1 text-sm">
        <p>Phone – 6338 0886</p>
        <p>Fax – 6338 0887</p>
        <p>5 Mandarin Avenue, Marina Square</p>
        <p>jimi@goodhost.com</p>
      </div>

      <div className="text-left md:text-center mt-4 md:mt-0">
        <p className="font-semibold">Hours:</p>
        <p>Mon–Fri: 9 am – 5 pm</p>
        <p>Sat: 10 am – 3 pm</p>
        <p>Sun: Closed</p>
      </div>

      <div className="flex flex-col text-left md:text-right space-y-2 text-md mt-4 md:mt-0">
        <a href="http://jimihendrix.com">
          Official Jimi Hendrix Website
        </a>
        <a href="http://guitar.com">
          Cool Guitar Stuff
        </a>
        <a href="http://www.guitarlessons.com">
          Free Guitar Lessons
        </a>
      </div>
    </footer>
  );
};

