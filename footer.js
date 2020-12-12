function foot() {
  const footer = document.createElement("footer");
  const p = document.createElement("p");

  p.innerHTML =
    'By ordering food from here, you agree to all our terms and comditions <a href="#" class="toc">TOCs</a>';

  footer.appendChild(p);

  document.body.appendChild(footer);
}

export { foot };
