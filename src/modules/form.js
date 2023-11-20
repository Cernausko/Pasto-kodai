const form = ()=>{
    return `
    <div class="error">
    </div>
    <div class="form-group">
        <input type="text" class="form-control city" placeholder="Miestas">
    </div>
    <div class="form-group">
        <input type="text" class="form-control term" placeholder="Jusu adresas">
    </div>
    <div class="form-group">
        <input type="text" class="form-control result" readonly>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-success">Ieskoti</button>
    </div>
    `
}

export default form