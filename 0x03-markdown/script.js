Vue.filter('date', time => moment(time).format('DD/MM/YY, HH:mm'))

new Vue({
  name: 'notebook',

  el: '#notebook',

  data () {
    return {
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      selectedId: localStorage.getItem('selected-id') || null,
    }
  },

  computed: {
    selectedNote () {
      return this.notes.find(note => note.id === this.selectedId)
    },

    notePreview () {
      return this.selectedNote ? marked(this.selectedNote.content) : ''
    },

    sortedNotes () {
      return this.notes.slice().sort((a, b) => a.created - b.created)
      .sort((a, b) => (a.favorite === b.favorite)? 0 : a.favorite? -1 : 1)
    },

    linesCount () {
      if (this.selectedNote) {
        return this.selectedNote.content.split(/\r\n|\r|\n/).length
      }
    },
    // wordsCount () {
    //   if (this.selectedNote) {
    //     var s = this.selectedNote.content
    //     s = s.replace(/\n/g, ' ')
    //     s = s.replace(/(^\s*)|(\s*$)/gi, '')
    //     s = s.replace(/[ ]{2,}/gi, ' ')
    //     return s.split(' ').length
    //   }
    // },

    charactersCount () {
      if (this.selectedNote) {
        return this.selectedNote.content.split('').length
      }
    },
  },

  // Change watchers
  watch: {
    notes: {
      handler: 'saveNotes',
      deep: true,
    },
    selectedId (val, oldVal) {
      localStorage.setItem('selected-id', val)
    },
  },

  methods:{
    addNote () {
      const time = Date.now()
      const note = {
        id: String(time),
        title: '新建笔记 ' + (this.notes.length + 1),
        content: '*在此处编写*',
        created: time,
        favorite: false,
      }
      this.notes.push(note)
      this.selectNote(note)
    },

    removeNote () {
      if (this.selectedNote && confirm('是否删除该笔记?')) {
        const index = this.notes.indexOf(this.selectedNote)
        if (index !== -1) {
          this.notes.splice(index, 1)
        }
      }
    },

    selectNote (note) {
      this.selectedId = note.id
    },

    saveNotes () {
      localStorage.setItem('notes', JSON.stringify(this.notes))
    },

    favoriteNote () {
      // this.selectedNote.favorite = !this.selectedNote.favorite
      // this.selectedNote.favorite = this.selectedNote.favorite ^ true
      this.selectedNote.favorite ^= true
    },
  },
})
