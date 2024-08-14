import "./styles/main.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import { createHeader } from "./components/header";
import { createFooter } from "./components/footer";

const wrapper = document.querySelector(".wrapper");

wrapper.prepend(createHeader());
wrapper.appendChild(createFooter());
