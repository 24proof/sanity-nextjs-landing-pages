export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7f5a36baeca057c784552e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-68jwrs5u',
                  apiId: '4ca7c20e-bb41-4a55-be33-3851c5f0a691'
                },
                {
                  buildHookId: '5e7f5a36f0aa9e4f3d384ae6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-i91vof9x',
                  apiId: '78d12388-76ce-4bd8-991e-fa96963552ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/24proof/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-i91vof9x.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
