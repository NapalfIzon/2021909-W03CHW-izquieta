import HeaderPage from "./HeaderPage/HeaderPage.js";
import MainPage from "./MainPage/MainPage.js";

const headerParentElement = document.querySelector(".header");
const mainParentElement = document.querySelector(".main");
// eslint-disable-next-line no-new
new HeaderPage(headerParentElement);
// eslint-disable-next-line no-new
new MainPage(mainParentElement);

console.log(
  "Hola chicos! Ánimos y a por la última semana de front! REACT POWER!!!"
);
console.log(
  "   ___  _   _ _____ ____  _____ __  __  ___  ____    ____ ___ __________   _      ____  _____   ____ ___  /\\/|   _      _     ___  ____   __     _____ _____ ____  _   _ _____ ____\n  / _ \\| | | | ____|  _ \\| ____|  \\/  |/ _ \\/ ___|  |  _ \\_ _|__  /__  /  / \\    |  _ \\| ____| |  _ \\_ _||/\\/   / \\    | |   / _ \\/ ___|  \\ \\   / /_ _| ____|  _ \\| \\ | | ____/ ___|\n | | | | | | |  _| | |_) |  _| | |\\/| | | | \\___ \\  | |_) | |  / /  / /  / _ \\   | | | |  _|   | |_) | || \\| | / _ \\   | |  | | | \\___ \\   \\ \\ / / | ||  _| | |_) |  \\| |  _| \\___ \\\n | |_| | |_| | |___|  _ <| |___| |  | | |_| |___) | |  __/| | / /_ / /_ / ___ \\  | |_| | |___  |  __/| || .` |/ ___ \\  | |__| |_| |___) |   \\ V /  | || |___|  _ <| |\\  | |___ ___) |\n  \\__\\_\\\\___/|_____|_| \\_\\_____|_|  |_|\\___/|____/  |_|  |___/____/____/_/   \\_\\ |____/|_____| |_|  |___|_|\\_/_/   \\_\\ |_____\\___/|____/     \\_/  |___|_____|_| \\_\\_| \\_|_____|____/ "
);
