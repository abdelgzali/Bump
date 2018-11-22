<template>

  <div class="parent-container">
    <div class="inputNav">
      <input type="text" class="notes-input" placeholder="Add notes here" v-model="newNotes"
      @keyup.enter="addNote">
      <button type="button" class="addButton" @click="addNote">+</button>
    </div>
    <div class="masonry" id="masonry">
      <div v-for="(note, index) in notes" :key="note.id" v-model="notes" class="note-container">
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
      newNotes : '',
      notesID: 8,
      // Existing data to be re-ordered
      preNotes: [
        {
          'id': 0,
          'title': 'My first note here',
        },
        {
          'id': 1,
          'title': 'My second note here',
        },
        {
          'id': 2,
          'title': 'My third note here',
        },
        {
          'id': 3,
          'title': 'My fourth note here',
        },
        {
          'id': 4,
          'title': 'My fifth note here',
        },
        {
          'id': 5,
          'title': 'My sixth note here',
        },
        {
          'id': 6,
          'title': 'My seventh note here',
        },
        {
          'id': 7,
          'title': 'My eigth note here',
        }
      ],
      notes: [],    // array for final order
      colCount : 0,
      oldCol: 0,
      isMounted: false
    }
  },
  mounted() {
    // test for mount
    this.isMounted = true;
    if (!this.isMounted == true) {
      return null;
    } else {
      this.preNotes.reverse();   // reverses array before reorder
      this.getColumn();
      this.$nextTick(function() {
        console.log("Tick!");
        this.reorder(this.preNotes);    // reorder when mounted
        window.addEventListener('resize', this.getColumn);
        window.addEventListener('resize', this.getOrder);
      })
    }
  },

  methods: {
    // adds new note via input
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

    // removes note at index
    removeNote(index) {
      this.notes.splice(index, 1)
    },

    // reorders preNotes based on column count
    reorder(preNotes) {
      let columnCount = Number(this.colCount);
      let noteCount = preNotes.length;
      let newIndex = 0;   // index for new order
      let colPointer = 1;   // pointer to keep track of columns
      console.log(this.notes);
      let notes = this.notes;

      for (let i = 0, len = preNotes.length; i < len; i++) {

        // when the column is filled reset index based on column pointer
        if (newIndex >= preNotes.length) {
          newIndex = colPointer;
          colPointer++;

        }
        notes.push(preNotes[newIndex]);   // migrates each array object to new array based on new order
        newIndex+= columnCount;   // update index based on columnCount
      }
    },

    // reactive updating for column count
    getColumn (event) {
      let elem = document.getElementById("masonry");    // grabs & stores element
      let cols = getComputedStyle(elem);    // stores all css properties of the element
      this.colCount = cols.columnCount;   // updates value of column count
      console.log("Changed cols!");
      return this.colCount;
    },

    getOrder() {
      let col = this.oldCol;
      console.log(col);
      if (col !== this.colCount) {
        this.notes = [];
        this.reorder(this.preNotes);
        this.oldCol = this.colCount;
      }
    }
  },
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
