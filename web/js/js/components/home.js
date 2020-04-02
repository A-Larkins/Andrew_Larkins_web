function home(id) {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `
      
      <img id="contentPic" src="pics/ibanez.png">

            <br><br><br>
            
            <h1 style="text-align: center;"><font size="6"><b>
                    Ibanez RGA series RGAR42MFMT Electric Guitar Flat Blue Lagoon Burst</b></font></h1>
          
            
            <p>
            <font size="5"><b>Specifications </b></font>
            <p><h3>Body</h3> <p> Body shape: Double cutaway <br> Body type: Solid body <br> 
                Body material: Laminatead
                <br> Top wood: Flamed Maple <br> Body wood: Mahogany <br> Body finish: Gloss 
                <br> Orientation: Right handed
            <p><h3> Neck</h3> <p> Neck shape: Wizard III <br> Neck wood: Maple <br> 
                Joint: Bolt-on <br> Scale length: 25.5 in.
                <br> Truss rod: Standard <br> Neck finish: Gloss
            <p><h3> Fretboard</h3> <p> Material: Maple <br> Radius: 15.75 in. <br> 
                Fret size: Jumbo <br> Number of frets: 24
                <br> Inlays: Dot <br> Nut width: 1.69 in. (43 mm)
            <p> <h3>Pickups </h3><p> Configuration: HH <br> Neck: Quantum (H) <br> 
                Middle: Not applicable <br> Bridge: Quantum (H)
                <br> Brand: Ibanez <br> Active or passive pickups: Passive <br> 
                Series or parallel: Switchable, neck humbucker in parallel position 2
                <br> Piezo: no <br> Active EQ: No <br> Special electronics: None
            <p> <h3>Controls</h3> <p> Control layout: Master volume, tone <br>
                Pickup switch: 5- way <br> Coil tap or split: Yes, position 4
            <br> Kill switch: no <p> <h3>Hardware </h3><p> Bridge type: Tremelo/Vibrato 
                <br> Bride design: 6-saddle double locking
                <br> Tailpiece: Not applicable <br> Tuning machines: Die-cast <br> 
                Color: Black
            <p> <h3>Other</h3> <p> Number of strings: 6-string <br> Special features: Top wood 
                <br> Country of origin: Indonesia<br>
                <a href="https://www.ibanez.com/usa/">Click Here To See More Ibanez Guitars</a>
                <br><br><br>
            </p>
    `;
    document.getElementById(id).innerHTML = content;
}

