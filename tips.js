$(document).ready(function() {
    var tips = `
        <div class="content">
            <h2>What is Healthy?</h2>
            <p>Beneficial to one's physical, mental, or emotional state, such as conducive to or associated with good health or reduced risk of disease. Healthy foods and a healthy lifestyle contribute to overall well-being.</p>
            
            <video controls poster="images/Healthtips1.jpg">
                <source src="video/Important of Health.mp4" type="video/mp4">
                Your browser cannot play the video.
            </video>
            
            <p style="text-align: center;"><a href="https://www.ghp-news.com/10-reasons-its-so-important-to-stay-healthy/">Understand more benefits of a healthy life</a></p>
            
            <h2>9 Tips for Healthy Life</h2>
            <div class="tips">
                <div class="tip-card" onclick="window.open('https://www.nia.nih.gov/health/healthy-eating-nutrition-and-diet/maintaining-healthy-weight', '_blank')">
                    <h3>1. Monitor Your Weight</h3>
                    <p>Check your weight regularly.</p>
                </div>
                <div class="tip-card" onclick="window.open('https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eight-tips-for-healthy-eating/', '_blank')">
                    <h3>2. Eat Healthy</h3>
                    <p>Focus on nutritious meals rich in protein and fiber while limiting unhealthy foods.</p>
                </div>
                <div class="tip-card" onclick="window.open('https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7700832/', '_blank')">
                    <h3>3. Limit Sedentary Time</h3>
                    <p>Break up the habit of sitting for long periods by taking short walks.</p>
                </div>
                <div class="tip-card" onclick="window.open('https://www.thensf.org/what-is-sleep-quality/', '_blank')">
                    <h3>4. Get Quality Sleep</h3>
                    <p>Get 7-8 hours of sleep every night to support your immune system. Staying up late can negatively affect liver detoxification and digestion.</p>
                </div>
                <div class="tip-card" onclick="window.open('https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6761695/#:~:text=Moderation%20is%20defined%20as%20no,oz%2080%2Dproof%20distilled%20spirits.', '_blank')">
                    <h3>5. Drink in Moderation</h3>
                    <p>Limit alcohol intake to avoid consuming excess calories.</p>
                </div>
                <div class="tip-card" onclick="window.open('https://www.indeed.com/career-advice/career-development/emotional-management-skills', '_blank')">
                    <h3>6. Manage Your Emotions</h3>
                    <p>Manage stress and anxiety to prevent weight gain.</p>
                </div>
                <div class="tip-card" onclick="window.open('https://selecthealth.org/blog/2020/07/7-health-benefits-of-sunlight', '_blank')">
                    <h3>7. Get Sunlight</h3>
                    <p>Sun exposure helps with calcium absorption, boosts metabolism, and improves immunity.</p>
                </div>
                <div class="tip-card" onclick="window.open('https://www.acas.org.uk/rest-breaks', '_blank')">
                    <h3>8. Take Rest Breaks</h3>
                    <p>Make sure to rest properly to relax your body and mind.</p>
                </div>
                <div class="tip-card" onclick="window.open('https://www.statefarm.com/simple-insights/family/effects-of-cell-phones#:~:text=Overuse%20of%20cell%20phones%20can,Concentration%20and%20learning%20issues.', '_blank')">
                    <h3>9. Limit Phone Use</h3>
                    <p>Excessive use of mobile phones can cause fatigue to your neck, back, and eyes, and cause damage to the cervical spine and back muscles.</p>
                </div>
            </div>
                 <p style="text-align :right;"> Click the box for more information.<p>
        </div>
    `;
    $('.content').html(tips);
});
