Protofolio website API design

# /home :

```json
{
  "Experience": "string",
  "completedProjects": "number",
  "writtenArticles": "number"
}
```

# /about-me:

```json
{
  "Image": "string",
  "Description": "string",
  "Skills": {
    "Frontend": [
      {
        "Name": "string",
        "createdAt": "string"
      }
    ],
    "Backend": [
      {
        "Name": "string",
        "createdAt": "string"
      }
    ],
    "Tools": [
      {
        "Name": "string",
        "createdAt": "string"
      }
    ]
  }
}
```

# /experience

```json
{
  [
    {
      "position": "string",
      "company": "string",
      "description" : "string",
      "techStack" : [
        {
          "name":"string",
          "createdAt":"string"
        }
      ],
      "from" : "string",
      "until": "string"
    }
  ]
}
```

# /projects

```json
{
  [
    "role": "string",
    "title":"string",
    "description":"string",
    "techStack" : [
      {
        "name":"string",
        "createdAt":"string"
      }
    ],
    "preview" : "string"
  ]
}
```

# /projects/:id
```json
{
  "title": "string",
  "description":"string",
  "client":"string",
  "duration" : {
    "from":"string",
    "until":"string",
  },
  "role":"string",
  "category":"string",
}
```

?page=1&warehouse=6311d4d9-7820-4f09-b383-3df3d00bb470&partner=93b4cf69-58ca-4b07-bbad-24fc25460411&item-type=assemble&category=6311d4d9-7820-4f09-b383-3df3d00bb472