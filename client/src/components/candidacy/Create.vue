<template>
  <div>
    <h1>Candidacy</h1>
    <form action="">
      <div>
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          v-model="description"
        ></textarea>
      </div>
      <div>
        <label for="cover_letter_filename">Cover letter</label>
        <input
          id="cover_letter_filename"
          name="cover_letter_filename"
          accept=".pdf, .doc, docx"
          type="file"
        />
      </div>
      <div>
        <label for="cv_filename">CV</label>
        <input
          id="cv_filename"
          name="cv_filename"
          accept=".pdf, .doc, docx"
          type="file"
        />
      </div>
      <div>
        <button class="btn" type="submit" @click.prevent="complete()">
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      errors: [],
      description: null,
      cover_letter_filename: null,
      cv_filename: null
    }
  }
}
</script>

<style>
</style>
