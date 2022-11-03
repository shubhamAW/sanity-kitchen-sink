export default {
  widgets: [
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
                  buildHookId: '6363883e56f9e754456c7595',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-va6m96yb',
                  apiId: '5182697c-6453-43c9-8537-08a45e8edf23'
                },
                {
                  buildHookId: '6363883ebcd7f55253cbd473',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3ktj2d9m',
                  apiId: '94581652-724d-41fd-8619-2585057f8a28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shubhamAW/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3ktj2d9m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
