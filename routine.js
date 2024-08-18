$(document).ready(function() {
    var routine = `
        <h2 style="color:#333;" >Daily health activities</h2>
        <div class="tips">
            <div class="tip">
                <h3>Drink plenty of water</h3>
                <p>Maintains hydration, supports bodily functions, and aids in detoxification.</p>
            </div>
            <div class="tip">
                <h3>Practice mindfulness</h3>
                <p>Engage in meditation or deep breathing exercises to reduce stress.</p>
            </div>
            <div class="tip">
                <h3>Maintain good posture</h3>
                <p>Ensure proper alignment while sitting and standing to prevent musculoskeletal issues.</p>
            </div>
            <div class="tip">
                <h3>Stay socially connected</h3>
                <p>Engage in positive social interactions to support mental well-being.</p>
            </div>
            <div class="tip">
                <h3>Take multivitamin supplements</h3>
                <p>Complements your diet to ensure you receive vital vitamins and minerals.</p>
            </div>
            <div class="tip">
                <h3>Exercise regularly</h3>
                <p>Boosts physical fitness, enhances mood, and strengthens the heart.</p>
            </div>
        </div>
    `;

    $('.content').html(routine);

});
