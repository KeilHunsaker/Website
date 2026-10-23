/**
 * script.js
 * Handles mobile navigation toggling and accessible client-side contact form validation.
 */
(function () {
  'use strict';

  // 1. Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('#primary-navigation');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      siteNav.classList.toggle('is-open', !isExpanded);
    });

    // Close mobile menu when a navigation link is clicked
    const navLinks = siteNav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if ( siteNav.classList.contains('is-open') ) {
          navToggle.setAttribute('aria-expanded', 'false');
          siteNav.classList.remove('is-open');
        }
      });
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        siteNav.classList.remove('is-open');
        navToggle.focus();
      }
    });
  }

  // 2. Client-Side Contact Form Validation & Feedback
  const contactForm = document.querySelector('#contact-form');

  if (contactForm) {
    const nameInput = document.querySelector('#contact-name');
    const emailInput = document.querySelector('#contact-email');
    const urlInput = document.querySelector('#contact-url');
    const messageInput = document.querySelector('#contact-message');
    const formStatus = document.querySelector('#form-status');

    function setFieldError(inputEl, errorId, message) {
      const errorEl = document.getElementById(errorId);
      if (!inputEl || !errorEl) return;

      if (message) {
        inputEl.setAttribute('aria-invalid', 'true');
        errorEl.textContent = message;
        errorEl.hidden = false;
      } else {
        inputEl.removeAttribute('aria-invalid');
        errorEl.textContent = '';
        errorEl.hidden = true;
      }
    }

    function isValidEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function isValidUrl(value) {
      if (!value) return true; // Optional field
      try {
        const parsed = new URL(value);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
      } catch (_) {
        return false;
      }
    }

    function validateForm() {
      let isValid = true;
      let firstInvalidField = null;

      // Name validation
      const nameVal = nameInput.value.trim();
      if (!nameVal) {
        setFieldError(nameInput, 'name-error', 'Please enter your name.');
        isValid = false;
        firstInvalidField = firstInvalidField || nameInput;
      } else {
        setFieldError(nameInput, 'name-error', '');
      }

      // Email validation
      const emailVal = emailInput.value.trim();
      if (!emailVal) {
        setFieldError(emailInput, 'email-error', 'Please enter your email address.');
        isValid = false;
        firstInvalidField = firstInvalidField || emailInput;
      } else if (!isValidEmail(emailVal)) {
        setFieldError(emailInput, 'email-error', 'Please enter a valid email address (e.g., name@domain.com).');
        isValid = false;
        firstInvalidField = firstInvalidField || emailInput;
      } else {
        setFieldError(emailInput, 'email-error', '');
      }

      // Optional URL validation
      const urlVal = urlInput.value.trim();
      if (urlVal && !isValidUrl(urlVal)) {
        setFieldError(urlInput, 'url-error', 'Please enter a complete URL starting with http:// or https://.');
        isValid = false;
        firstInvalidField = firstInvalidField || urlInput;
      } else {
        setFieldError(urlInput, 'url-error', '');
      }

      // Message validation
      const messageVal = messageInput.value.trim();
      if (!messageVal) {
        setFieldError(messageInput, 'message-error', 'Please describe the issue or what you need help with.');
        isValid = false;
        firstInvalidField = firstInvalidField || messageInput;
      } else {
        setFieldError(messageInput, 'message-error', '');
      }

      return { isValid: isValid, firstInvalidField: firstInvalidField };
    }

    // Clear field error on input
    [
      { el: nameInput, err: 'name-error' },
      { el: emailInput, err: 'email-error' },
      { el: urlInput, err: 'url-error' },
      { el: messageInput, err: 'message-error' }
    ].forEach(function (item) {
      if (item.el) {
        item.el.addEventListener('input', function () {
          if (item.el.getAttribute('aria-invalid') === 'true') {
            setFieldError(item.el, item.err, '');
          }
        });
      }
    });

    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const result = validateForm();

      if (!result.isValid) {
        if (formStatus) {
          formStatus.className = 'form-status is-error';
          formStatus.textContent = 'Please correct the highlighted fields before sending.';
          formStatus.hidden = false;
        }
        if (result.firstInvalidField) {
          result.firstInvalidField.focus();
        }
        return;
      }

      // Construct mailto parameters cleanly while providing immediate UI confirmation
      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const urlVal = urlInput.value.trim();
      const messageVal = messageInput.value.trim();

      const subject = encodeURIComponent('Website Inquiry from ' + nameVal);
      const bodyLines = [
        'Name: ' + nameVal,
        'Email: ' + emailVal,
        'Website/Server URL: ' + (urlVal || 'Not provided'),
        '',
        'Issue / Message:',
        messageVal
      ];
      const body = encodeURIComponent(bodyLines.join('\n'));

      if (formStatus) {
        formStatus.className = 'form-status is-success';
        formStatus.textContent = 'Thank you, ' + nameVal + '. Opening your email client to send your note to keil@keilhunsaker.com...';
        formStatus.hidden = false;
      }

      window.location.href = 'mailto:keil@keilhunsaker.com?subject=' + subject + '&body=' + body;
      contactForm.reset();
    });
  }
})();
