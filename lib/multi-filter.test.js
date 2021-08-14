import { multiFilter } from './multi-filter'

const postList = [
  {
    id: 1,
    title: 'Hello World',
    tags: ['react', 'personal'],
    body: 'hello to the world, this is my new blog!',
  },
  {
    id: 2,
    title: 'Watch for errors in VSCode',
    tags: ['programming', 'productivity'],
    body: 'errors in vscode are horrible',
  },
  {
    id: 3,
    title: 'Why I use typescript',
    tags: ['programming', 'typescript'],
    body: 'A quick set of tips as to why I use typescript',
  },
  {
    id: 4,
    title: 'A blog about stuff',
    tags: ['something', 'react', 'personal'],
    body: 'My musings on the internet',
  },
  {
    id: 5,
    title: 'A blog with no tags',
    tags: [],
    body: 'A very plain piece of writing about personal things.',
  },
]

function sanitizeString(string) {
  if (!string || string.length === 0) return ''
  return string.trim().toLowerCase()
}

function compareAgainstEveryElementFromAnotherArray(array, comparedArray) {
  if (!array) throw new Error('Must provide valid array')
  if (!comparedArray) throw new Error('Must provide valid comparedArray')
  return comparedArray.every((el) => array.includes(el))
}

describe('multiFilter', () => {
  let searchString
  let searchTags
  const filters = {
    title: (title) =>
      !!title
        ? sanitizeString(title).includes(sanitizeString(searchString))
        : true,
    tags: (tags) =>
      !!tags
        ? compareAgainstEveryElementFromAnotherArray(tags, searchTags)
        : true,
  }

  describe('GIVEN articles exist', () => {
    describe('AND those articles have tags, titles and a body', () => {
      describe('WHEN no tags are added to the search', () => {
        describe('AND a searchstring exists', () => {
          it('THEN return only articles containing search string in title or body', () => {
            searchString = 'blog'
            searchTags = []
            const result = multiFilter(postList, filters)

            expect(result.length).toEqual(2)
            expect(result[0].title).toContain(searchString)
            expect(result[1].title).toContain(searchString)
          })
        })
      })
      describe('WHEN multiple tags are added to search', () => {
        describe('AND no searchstring', () => {
          it('THEN return only articles containing all selected tags', () => {
            searchString = undefined
            searchTags = ['something', 'react', 'personal']
            const result = multiFilter(postList, filters)

            expect(result.length).toEqual(1)
            expect(result[0].id).toBe(4)
          })
        })
        describe('AND also a searchstring', () => {
          it('THEN return only articles containing all selected tags', () => {
            searchString = 'blog'
            searchTags = ['something', 'react', 'personal']
            const result = multiFilter(postList, filters)

            // all result titles or bodies should contain the searchString
            const containsSearchStringInBodyOrTitle =
              result.length > 0 &&
              result.every(
                (predicate) =>
                  predicate.title.includes(searchString) ||
                  predicate.body.includes(searchString),
              )

            // all searchTags should exist in every result's tag array
            const containsAllTags =
              result.length > 0 &&
              result.every((post) =>
                searchTags.every((t) => post.tags.includes(t)),
              )

            expect(containsSearchStringInBodyOrTitle).toBe(true)
            expect(containsAllTags).toBe(true)
          })
        })
        describe('AND also a searchstring that does not match any article', () => {
          it('THEN return only articles containing all selected tags', () => {
            searchString = 'foo'
            searchTags = ['something', 'react', 'personal']
            const result = multiFilter(postList, filters)

            expect(result.length).toEqual(0)
          })
        })
      })
    })
    describe('WHEN tag array or searchstring are empty', () => {
      it('THEN return all articles', () => {
        searchString = ''
        searchTags = []
        const result = multiFilter(postList, filters)

        expect(result.length).toEqual(postList.length)
      })
    })
    describe('WHEN filter object is empty', () => {
      it('THEN return all articles', () => {
        searchString = 'anything'
        searchTags = ['asd', 'xjlas']
        const result = multiFilter(postList, {})

        expect(result.length).toEqual(postList.length)
      })
    })
  })
})
