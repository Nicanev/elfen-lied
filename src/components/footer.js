export function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
        <p>&copy; 2024 My Website. All rights reserved.</p>
    `;
  return footer;
}
