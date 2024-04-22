---
company: 'BRYTER'
role: 'Senior Software Engineer'
slug: 'bryter'
type: job
skills:
  - frontend
  - design systems
  - library design
startDate: 2021-07-08
endDate: 2023-07-31
---

- Architected a new Design System monorepo with semver, auto changelog generation and automatic release to an internal NPM registry for each component and package relating to the system
- Helped design and improve the Developer Experience of using our internal Rich Text Editor used in various parts of the application
- Consolidated and removed many outdated components, design patterns and deprecated implementations of the Design System
- Helped with the process of upgrading from Vue2 to Vue3 and ensuring the component library was cross compatible with the different versions

<!-- I joined Bryter in 2021 as an IC for one of the core teams. As part of my onboarding I connected with members from the fledgling Design Systems team. I tried my best to work closely with them to upgrade the parts of my teams Frontend code that was using components from the Design System and ensure they were inline with the Design Systems team's guidelines. Eventually I was asked to join the Design Systems team and began working on learning how to build the system using Web Component, which was the technology that the team had landed on. It was a genuinely exciting project because it felt like we were at the cutting edge of web standards and it was proof that you didn't need intense Javascript libraries to get re-usability and consistency in your web applications.

Unfortunately there were several incompatibilities with Web Components and the testing suite we were using, namely the accessibility-based testing. The broader team had adopted a testing philosophy from the [Testing Library](https://testing-library.com) team and it was a good guiding light to push our engineers to ensure that the markup and aria properties they were using were accessible. The issue, at the time at least, was that the shadow DOM was closed off to the AOM and so our Testing Library tests would fail to see our components as accessible eventhough we had tested them with screenreaders and with keyboard navigation.

Over time the tension between the usefulness of Web Components, chiefly their ability to work across frameworks and the encapsulation of style to ensure consistency, was overshadowed by the frustrations they caused Engineers in using them. After a lot of conversations and heated discussions we decided to move back to Vue for the component library which was the main framework being used to build the application.

At this point the other members of the Design Systems team had decided to leave the company so I ended up leading this new initiative to move back to Vue. It was a very slow and difficult project. I began by finding any discrepancies between the more up-to-date Web Components to bring those style changes back to the legacy components. I also wrote documentation about which components to use or to swap out. The next phase was to begin building a new library repo separate from the core application as we had other projects/repos that needed access to the components and tooling from the Design System. The final thing we needed to consider was the library's compatibility for both Vue2 and Vue3. The Engineering team was aware that Vue2 was going to be reaching end of life and we would need to gradually upgrade the various parts of our app over the coming months.

As the year rolled on I began working with hiring managers to backfill the other positions on the Design Systems team and get me some much needed support. We hired a wonderful Engineer who had a lot of experience building out similar systems and we began working together to create all of the infrastructure and tooling for this new repo. The library was built with a semantic versioning system, automatic changelogs, some tooling to scaffold new components with the file structures and naming conventions of the rest of the library and much more. It wasn't all smooth sailing, we encountered a lot of cross-compatibility issues with Vue2 and Vue3 and had to forego some of the more interesting updates to Vue to make sure everything worked. Over time, and with the help of the broader Engineering team as well as some dedicated advocates of the Design System we began to swap out all of the old Web Components and the legacy components being used from within the monorepo.

I decided that I would leave the company mid-year and so in my final 6 months working there I did my best to advocate for the dissolution of the Design Systems team and redistribute the responsibility of the improvement and maintenance of the system onto the product team as a whole. Over the ~2 years I had been at the company I repeatedly became the bottleneck for information due to folks leaving the team or due to layoffs. I didn't want this system to die immediately after I left the company.

Sharing the responsibility of the Design System more broadly also freed me up to do some other work with Frontend teams. In the last few months before I left I contributed to a small group who was extracting the Rich Text Editor as had become tangled into the core product code. When I joined the group they had been doing really excellent work on the extraction but they were less focused on what it was like for internal Engineers to use it as a library or a package. I began asking some questions and working to design an interface to make it easier for Engineers to bring the library into their projects with as little fuss as possible while maintaining the flexibility that was needed for its various use cases. We all collaborated on the design of this interface and after a lot of pairing and adjustments we landed on a design that we all felt excited about.

I'm really happy with the work I did at Bryter. I learned a lot from my coworkers and I definitely grew my skillset as well as my general experience as an Engineer. -->
