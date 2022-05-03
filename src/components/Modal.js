import "./modal.css"
function Modal(){
    return(
        <div className="modal" id="modal1">
  <div className="modal-dialog">
    <header className="modal-header">
      The header of the first modal
      <button className="close-modal" aria-label="close modal" data-close>
        ✕  
      </button>
    </header>
    <section class="modal-content">
      <p><strong>Press ✕, ESC, or click outside of the modal to close it</strong></p>
    </section>
    <footer class="modal-footer">
      The footer of the first modal
    </footer>
  </div>
</div>

    )
}
export {Modal}