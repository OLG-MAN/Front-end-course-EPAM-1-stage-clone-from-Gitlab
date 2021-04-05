const data = [{
    'folder': true,
    'title': 'Grow',
    'children': [{
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'English',
        'children': [{
          'title': 'Present_Perfect.txt'
        }]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Soft',
    'children': [{
        'folder': true,
        'title': 'NVIDIA',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'folder': true,
    'title': 'Doc',
    'children': [{
      'title': 'project_info.txt'
    }]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root')
rootNode.classList.add('root')

function renderTree(entries) {
  const list = document.createElement('ul')
  for (const entry of entries) {
    const item = document.createElement('li')
    item.textContent = entry.title
    item.classList.add(entry.folder ? 'folder' : 'file')
    list.appendChild(item)
    if (entry.folder && entry.children !== null) {
      list.appendChild(renderTree(entry.children))
    }
  }
  return list;
}

const app = renderTree(data)
app.classList.add('app')
document.getElementById('root').appendChild(app)

let folders = document.getElementsByClassName('folder');
let files = document.getElementsByClassName('file');
folders.setAttribute('id', 'fldrs');
files.setAttribute('id', 'fls');
folders.setAttribute('id', 'fldrs');
files.setAttribute('id', 'fls');




