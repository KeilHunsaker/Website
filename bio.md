# The Long Run: From Paper Tape to Modern Web Applications
### By Keil Hunsaker

---

## Early Hardware & Mainframe Operations

My history with computers started in the eighth grade in Saudi Arabia, where my father was working for Aramco. They offered a basic programming class, and that was where I got hooked. At the time, our setup consisted of about six mechanical Teletypes and a single CRT screen. Because access to the CRT was limited, my earliest programming didn't involve a monitor at all. You entered your instructions, the machine chattered back onto paper, and you learned quickly that your logic had to be right before you touched the machine.

When I started college at the University of Missouri-Rolla (now the Missouri University of Science and Technology), I entered their co-op program to alternate between school and professional work. My first placement was at Westinghouse. At that time, the company was still running programs from physical punched card decks. My job was straightforward automation: inserting a short Job Control Language (JCL) script at the head of batch files so the system would save the card deck contents directly to magnetic tape or another format instead of requiring operators to keep handling physical trays of cards. From there, I moved into another part of the project using a database programming language called Mantis, until financial constraints forced Westinghouse to shut down their co-op program.

The next semester, I joined IBM. My first assignment was on an airline project focused on communications between personal computers and enterprise mainframes. A major technical hurdle on that project was handling translation issues between PC ASCII and mainframe EBCDIC format. We didn't have visual source-level debuggers; our debugging environment was assembly code. We would take a physical printout of the compiled C code paired directly with the corresponding assembly listings and trace the instructions by hand to isolate faults.

---

## Systems, Operating Systems & High-Performance Computing

My next IBM co-op assignment placed me in the OS/2 department during the OS/2 1.0 and 1.1 releases. I worked in the software development toolkit group, which built tools for external developers. When I arrived, they handed me an unmounted physical hard drive and told me to put it in my machine. Up to that point, I had never opened a computer case, so I had to learn how to handle hardware on the spot. That was basically how the IBM co-op program worked. Throw you in the deep end and if you really need it, throw you a line.

My primary assignment was writing a utility to convert OS/2 1.0 programs—which ran strictly full-screen—into OS/2 1.1 windowed applications. The fundamental mechanism involved flipping an execution flag bit in the program header. However, doing that safely required parsing the binary executable header and checking every imported system function against a master list of supported, questionable, or blocked APIs before presenting the outcome to the developer. If they chose, they could supply a command flag to force the conversion regardless. That utility was included in the official release of the IBM OS/2 1.1 Toolkit under the name **`Winnable`**.

After graduating from college, I took a position at Western Geophysical in Houston, Texas, writing FORTRAN modules for their seismic and geophysical data processing systems. After a couple of years, our operations migrated from mainframes to Unix environments, managing jobs across an infrastructure of Sun, IBM, Convex, and Cray systems. 

During that platform shift, I handled several critical plotting and graphics utilities:
* Wrote the conversion program that translated our internal plot format into the seismic industry-standard plot format, converting individual vector instructions (triangles, squares, circles, and coordinate sets) to match the new specifications.
* Patched and overhauled our existing plot display viewer so it rendered correctly using the updated plot format.
* Developed a tracking utility to monitor plot file queues and their active print statuses.

I later returned to IBM in Boca Raton, Florida, working in their test division to validate OS/2 fix packs. My responsibilities included compatibility testing for DOS, Windows, and Presentation Manager. For DOS and Windows, I ran software suites to ensure core system compatibility had not regressed. For Presentation Manager, I helped create and debug a series of automated programs designed to stress-test the graphical windowing features. When that project concluded, I transitioned to Tivoli to work on Workspace on Demand.

---

## Real-World Business Operations & Web Development

After some time working outside the tech industry, I joined Microkinetics, a small industrial hardware and controls company in Atlanta, Georgia. Because it was a compact operation, I handled a wide array of technical and operational responsibilities:
* IT infrastructure and local network maintenance
* Web development and site updates
* Shipping and receiving logistics
* Physical inventory tracking
* Component and system level electronics testing

While managing those everyday business bottlenecks, I overhauled their online sales workflow. Their existing site had grown as a collection of standalone, static HTML pages where every individual page carried its own hardcoded navigation. Because no ready-made templating libraries fit our environment at the time, I replaced that setup with a rudimentary PHP templating engine so shared elements were managed in one place. 

I also upgraded their payment and fulfillment infrastructure:
* **Online Payment Processing:** Replaced their manual workflow—where credit cards were collected and typed by hand into an office payment terminal—by integrating automated checkouts via the PayPal API.
* **Logistics & Rate Calculation:** Implemented direct UPS API integration so shipping rates and tracking information could be retrieved and provided to customers automatically.
* **Interactive Invoicing Tool:** Built an internal billing application using vanilla JavaScript and PHP. It allowed staff to generate clean, formatted invoices for repair customers with full parts lists, dynamic cross-field recalculations as quantities changed, and accurate summary totals without third-party frameworks.

Following Microkinetics, I worked at Global-e, a company providing merchants with international tariff calculations, customs clearance, and duty management for global commerce. In that role, I worked with both Magento and Laravel codebases. My daily work focused on technical merchant onboarding: writing the integration logic required to bring new retailers onto the platform, configuring payment pipelines to accept and process gift cards, and ensuring regional tax and checkout rules functioned correctly across each store.

---

## Technical Baseline

* **Languages & Core Environments:** C, Fortran, Mantis, Assembly (debugging), PHP, JavaScript, SQL
* **Operating Systems & Platforms:** Unix (Sun, Convex, Cray, IBM), Linux, IBM OS/2 (1.0/1.1), DOS, Windows, Mainframe / JCL
* **Frameworks & Integrations:** Laravel, Magento, PayPal API, UPS API
