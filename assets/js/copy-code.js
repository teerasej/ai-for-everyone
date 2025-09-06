document.addEventListener('DOMContentLoaded', function() {
  // Select all code blocks
  const codeBlocks = document.querySelectorAll('pre > code');
  
  // For each code block
  codeBlocks.forEach(function(codeBlock) {
    // Create the copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-button';
    copyButton.type = 'button';
    copyButton.innerText = 'Copy';
    
    // Style for the button
    copyButton.style.position = 'absolute';
    copyButton.style.top = '5px';
    copyButton.style.right = '5px';
    copyButton.style.padding = '3px 8px';
    copyButton.style.fontSize = '0.8em';
    copyButton.style.color = '#ffffff';
    copyButton.style.background = '#565656';
    copyButton.style.border = 'none';
    copyButton.style.borderRadius = '4px';
    copyButton.style.cursor = 'pointer';
    
    // Add the copy functionality
    copyButton.addEventListener('click', function() {
      const code = codeBlock.innerText;
      navigator.clipboard.writeText(code).then(function() {
        // Visual feedback
        copyButton.innerText = 'Copied!';
        copyButton.style.background = '#4CAF50';
        
        setTimeout(function() {
          copyButton.innerText = 'Copy';
          copyButton.style.background = '#565656';
        }, 2000);
      }, function(error) {
        copyButton.innerText = 'Error!';
        copyButton.style.background = '#F44336';
        
        setTimeout(function() {
          copyButton.innerText = 'Copy';
          copyButton.style.background = '#565656';
        }, 2000);
      });
    });
    
    // Get the parent of the code block
    const pre = codeBlock.parentNode;
    pre.style.position = 'relative';
    
    // Add the button to the pre element
    pre.appendChild(copyButton);
  });
});
