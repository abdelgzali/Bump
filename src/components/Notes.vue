<template>

  <div class="parent-container">
    <div class="inputNav">
      <input type="text" class="notes-input" placeholder="Add notes here" v-model="newNotes"
      @keyup.enter="addNote">
      <button type="button" class="addButton" @click="addNote">+</button>
    </div>
    <div class="masonry" id="masonry">
      <div v-for="(note, index) in notes.slice().reverse()" :key="note.id" class="note-container">
        <div>
          {{ note.title }}
        </div>
        <div class="remove-note" v-on:click.once="removeNote(index)">x</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Notes',
  data () {
    return {
      colCount : '',
      newNotes : '',
      notesID: 8,
      notes: [
        {
          'id': 0,
          'title': 'My first note here',
          'order': 8,
        },
        {
          'id': 1,
          'title': 'My second note here',
          'order': 7,
        },
        {
          'id': 2,
          'title': 'My third note here',
          'order': 6,
        },
        {
          'id': 3,
          'title': 'My fourth note here',
          'order': 5,
        },
        {
          'id': 4,
          'title': 'My fifth note here',
          'order': 4,
        },
        {
          'id': 5,
          'title': 'My sixth note here',
          'order': 3,
        },
        {
          'id': 6,
          'title': 'My seventh note here',
          'order': 2,
        },
        {
          'id': 7,
          'title': 'My eigth note here',
          'order': 1,
        }
      ]
    }
  },

  // cached getter
  computed: {
    colNum() {
      this.colCount = document.getElementById("masonry").style.columnCount;
    },


  },
  methods: {
    addNote() {
      if (this.newNotes.trim() == 0) {    // trims whitespace and checks remaining value
        return    // early return if empty
      }
      this.notes.push({
        id: this.notesID,
        title: this.newNotes,
      })
      this.newNotes = '';
      this.notesID++;
    },

    removeNote(index) {
      this.notes.splice(index, 1)
    },

    // function for reorder logic
    reorder(oldIndex, newIndex) {
      // place note in new position and delete old position using splice
      this.notes.splice(newIndex, 0, this.notes.splice(oldIndex, 1)[0]);
      this.notes.foreEach(function(note, index) {   // changes value of order in array
        item.order = index;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .parent-container {
    margin: 0px 30px;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  .masonry {
    column-count: 5;
    column-gap: 6.66667px;
  }
  /* Masonry on large screens */
  @media only screen and (min-width: 1024px) {
    .masonry {
      column-count: 4;
    }
  }

  /* Masonry on medium-sized screens */
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    .masonry {
      column-count: 3;
    }
  }

  /* Masonry on small screens */
  @media only screen and (max-width: 767px) and (min-width: 540px) {
    .masonry {
      column-count: 2;
    }
  }

  .inputNav {
    margin-bottom: 1.75em;
    display: flex;
    flex-direction: column;
  }

  .notes-input {
    padding: 20px 0px;
    margin: 50px 30px;
    text-align: center;
    color: #bdc3c7;

  }

  .note-container {
    height: auto;
    border: 0.15px solid #bdc3c7;
    padding: 1em;
    margin: 0 0 0.5em;
    break-inside: avoid;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .note-container:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22);
  }

  .remove-note {
    cursor: pointer;
    margin-left: 90%;
  }

  .addButton {
    margin: auto;
    margin-bottom: 5px;
    padding: 20px;
    border-radius: 50%;
    border: 0px;
    background: #2ecc71;
    font-size: 35px;
    color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  .addButton:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22);
    margin-bottom: 0px;
    padding: 25px;
  }
</style>