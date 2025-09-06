document.addEventListener('DOMContentLoaded', function() {
  // Select all code blocks
  const codeBlocks = document.querySelectorAll('div.highlight > pre');
  
  // For each code block
  codeBlocks.forEach(function(codeBlock) {
    // Create the copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-button';
    copyButton.type = 'button';
    copyButton.innerText = 'Copy';
    
    // No inline styles - we'll use the CSS file for styling
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    
    // Add the copy functionality
    copyButton.addEventListener('click', function() {
      const code = codeBlock.textContent;
      navigator.clipboard.writeText(code).then(function() {
        // Visual feedback
        copyButton.innerText = 'Copied!';
        copyButton.classList.add('copied');
        
        setTimeout(function() {
          copyButton.innerText = 'Copy';
          copyButton.classList.remove('copied');
        }, 2000);
      }, function(error) {
        copyButton.innerText = 'Error!';
        copyButton.classList.add('error');
        
        setTimeout(function() {
          copyButton.innerText = 'Copy';
          copyButton.classList.remove('error');
        }, 2000);
      });
    });
    
    // Make the parent position relative if it's not already
    const preParent = codeBlock.parentNode;
    if (window.getComputedStyle(preParent).position === 'static') {
      preParent.style.position = 'relative';
    }
    
    // Add the button to the pre element
    preParent.appendChild(copyButton);
  });
});
