// Player data storage
let playerData = {
    height: { value: 0, unit: 'cm' },
    weight: { value: 0, unit: 'kg' },
    age: 0,
    position: '',
    secondaryPositions: [],
    trainingDays: 0,
    dietaryRestrictions: '',
    weightHistory: []
};

// Detailed exercise database organized by position and focus
const detailedWorkoutDatabase = {
    goalkeeper: {
        strength: [
            {
                name: 'Goalkeeper Power Squats',
                sets: '4',
                reps: '8-12',
                details: '• Stand with feet shoulder-width apart\n• Lower into squat position, keeping chest up\n• Explode up powerfully for diving saves\n• Rest 90 seconds between sets\n• Focus: Leg power for explosive movements'
            },
            {
                name: 'Single-Arm Dumbbell Rows',
                sets: '3',
                reps: '10 each arm',
                details: '• Place one knee on bench, lean forward\n• Pull dumbbell to ribcage with control\n• Squeeze shoulder blade at top\n• Rest 60 seconds between sets\n• Focus: Back strength for throwing power'
            },
            {
                name: 'Medicine Ball Overhead Throws',
                sets: '4',
                reps: '8-10',
                details: '• Stand with feet hip-width apart\n• Hold medicine ball overhead\n• Throw ball down explosively\n• Catch on bounce and repeat\n• Focus: Core power and distribution strength'
            }
        ],
        agility: [
            {
                name: 'Lateral Diving Drills',
                sets: '3',
                reps: '6 each side',
                details: '• Start in goalkeeper stance\n• Dive laterally to touch cone\n• Return to center quickly\n• Alternate sides each rep\n• Focus: Save reaction speed'
            },
            {
                name: 'Reaction Ball Training',
                sets: '4',
                reps: '2 minutes',
                details: '• Stand 3 feet from wall\n• Throw reaction ball at wall\n• Catch ball after unpredictable bounce\n• Vary throwing angles and speed\n• Focus: Hand-eye coordination and reflexes'
            },
            {
                name: 'Cone Weaving Footwork',
                sets: '3',
                reps: '30 seconds',
                details: '• Set up 6 cones in straight line\n• Weave through cones with quick feet\n• Keep low goalkeeper stance\n• Touch each cone with hand\n• Focus: Footwork and positioning'
            }
        ],
        cardio: [
            {
                name: 'Goalkeeper Sprint Intervals',
                sets: '8',
                reps: '20s on/40s off',
                details: '• Sprint between penalty box and 18-yard line\n• Include diving motion at each end\n• Walk back during rest period\n• Maintain high intensity throughout\n• Focus: Match-specific conditioning'
            },
            {
                name: 'Box-to-Box Runs',
                sets: '6',
                reps: '30 seconds',
                details: '• Run from goal line to penalty box\n• Include goalkeeper movements (diving, jumping)\n• Return with backpedaling\n• Rest 90 seconds between sets\n• Focus: Positional endurance'
            }
        ]
    },
    defender: {
        strength: [
            {
                name: 'Defensive Squats',
                sets: '4',
                reps: '10-15',
                details: '• Feet shoulder-width apart, toes slightly out\n• Lower until thighs parallel to ground\n• Drive through heels to stand\n• Keep chest up and core tight\n• Focus: Tackling and jumping power'
            },
            {
                name: 'Romanian Deadlifts',
                sets: '3',
                reps: '8-12',
                details: '• Hold barbell with overhand grip\n• Hinge at hips, lower bar along legs\n• Feel stretch in hamstrings\n• Drive hips forward to return\n• Focus: Posterior chain strength for headers'
            },
            {
                name: 'Push-Up Variations',
                sets: '3',
                reps: '12-20',
                details: '• Standard, wide-grip, and diamond push-ups\n• Keep body in straight line\n• Lower chest to ground\n• Push up explosively\n• Focus: Upper body strength for aerial duels'
            }
        ],
        agility: [
            {
                name: 'Defensive Ladder Drills',
                sets: '4',
                reps: '2 lengths',
                details: '• In-in-out-out pattern through ladder\n• Keep low defensive stance\n• Quick, light feet contact\n• Arms ready for tackling position\n• Focus: Defensive footwork and positioning'
            },
            {
                name: 'Defensive Shuffles',
                sets: '3',
                reps: '20 yards each direction',
                details: '• Start in defensive stance\n• Shuffle laterally without crossing feet\n• Keep hips low, eyes up\n• Change direction on command\n• Focus: Lateral movement and positioning'
            },
            {
                name: 'Header Jump Training',
                sets: '4',
                reps: '8-10',
                details: '• Jump vertically with arms extended\n• Simulate heading motion at peak\n• Land softly on both feet\n• Focus on timing and power\n• Focus: Aerial dominance'
            }
        ],
        cardio: [
            {
                name: 'Endurance Base Run',
                sets: '1',
                reps: '35-50 minutes',
                details: '• Maintain steady, comfortable pace\n• 70-80% of maximum heart rate\n• Focus on breathing rhythm\n• Include 5-minute warm-up and cool-down\n• Focus: Aerobic base for 90-minute matches'
            },
            {
                name: 'Hill Sprint Intervals',
                sets: '6',
                reps: '15 seconds up/walk down',
                details: '• Find 30-40 yard hill with moderate incline\n• Sprint up at 90% effort\n• Walk down for recovery\n• Focus on driving knees high\n• Focus: Power endurance and leg strength'
            }
        ]
    },
    midfielder: {
        strength: [
            {
                name: 'Walking Lunges',
                sets: '3',
                reps: '12 each leg',
                details: '• Step forward into lunge position\n• Lower back knee toward ground\n• Push off front foot to next lunge\n• Keep torso upright throughout\n• Focus: Functional leg strength for running'
            },
            {
                name: 'Plank Variations',
                sets: '3',
                reps: '45-60 seconds',
                details: '• Standard plank, side planks, plank-ups\n• Keep body in straight line\n• Engage core throughout\n• Breathe normally, don\'t hold breath\n• Focus: Core stability for ball control'
            },
            {
                name: 'Midfielder Burpees',
                sets: '3',
                reps: '10-15',
                details: '• Squat down, jump back to plank\n• Perform push-up\n• Jump feet back to squat\n• Jump up with arms overhead\n• Focus: Full-body conditioning'
            }
        ],
        agility: [
            {
                name: 'Cone Dribbling Circuit',
                sets: '4',
                reps: '45 seconds',
                details: '• Set up 8 cones in zigzag pattern\n• Dribble through with both feet\n• Use inside/outside touches\n• Maintain close ball control\n• Focus: Ball control under pressure'
            },
            {
                name: 'Quick Feet Box Drill',
                sets: '3',
                reps: '30 seconds',
                details: '• Create 2x2 yard box with cones\n• Quick feet in and out of box\n• Various patterns: forward/back, lateral\n• Keep on balls of feet\n• Focus: Foot speed and coordination'
            },
            {
                name: 'Direction Change Sprints',
                sets: '4',
                reps: '8 changes',
                details: '• Sprint 10 yards, plant and cut 90 degrees\n• Continue for 8 direction changes\n• Focus on sharp cuts and acceleration\n• Rest 90 seconds between sets\n• Focus: Change of pace and direction'
            }
        ],
        cardio: [
            {
                name: 'Match-Pace Intervals',
                sets: '8',
                reps: '2 min on/1 min off',
                details: '• Run at match intensity (80-85% effort)\n• Include jogging, sprinting, walking\n• Mimic game movement patterns\n• Active recovery during rest periods\n• Focus: Match-specific endurance'
            },
            {
                name: 'Fartlek Training',
                sets: '1',
                reps: '25-30 minutes',
                details: '• Continuous run with varied pace\n• Sprint 30s, jog 2 min, repeat\n• Include hills and flat terrain\n• Listen to body for pace changes\n• Focus: Aerobic and anaerobic systems'
            }
        ]
    },
    forward: {
        strength: [
            {
                name: 'Explosive Jump Squats',
                sets: '4',
                reps: '6-10',
                details: '• Squat down to parallel position\n• Explode up jumping as high as possible\n• Land softly and immediately repeat\n• Use arms for momentum\n• Focus: Explosive power for acceleration'
            },
            {
                name: 'Single-Leg Calf Raises',
                sets: '3',
                reps: '15 each leg',
                details: '• Stand on one foot on elevated surface\n• Rise up on toes as high as possible\n• Lower slowly with control\n• Hold wall for balance if needed\n• Focus: Sprint power and ankle stability'
            },
            {
                name: 'Russian Twists',
                sets: '3',
                reps: '20 each side',
                details: '• Sit with knees bent, lean back slightly\n• Hold weight or medicine ball\n• Rotate torso side to side\n• Keep feet off ground for difficulty\n• Focus: Rotational power for shooting'
            }
        ],
        agility: [
            {
                name: 'Sprint Start Drills',
                sets: '6',
                reps: '10 yards',
                details: '• Start in 3-point stance\n• Explode forward on command\n• Drive knees high, pump arms\n• Focus on first 3 steps\n• Focus: Acceleration and first step quickness'
            },
            {
                name: 'Cutting and Finishing',
                sets: '4',
                reps: '6 cuts + shot',
                details: '• Sprint 15 yards, plant and cut sharply\n• Accelerate toward goal\n• Finish with shot on target\n• Alternate cutting directions\n• Focus: Game-realistic movements'
            },
            {
                name: 'Acceleration Ladders',
                sets: '5',
                reps: '20 yards',
                details: '• Mark distances at 5, 10, 15, 20 yards\n• Accelerate through each marker\n• Reach top speed by 20 yards\n• Walk back for recovery\n• Focus: Progressive acceleration'
            }
        ],
        cardio: [
            {
                name: 'Anaerobic Sprint Intervals',
                sets: '10',
                reps: '15s on/45s off',
                details: '• All-out sprint for 15 seconds\n• Complete rest for 45 seconds\n• Maintain maximum effort each sprint\n• Track distance covered per sprint\n• Focus: Anaerobic power and speed'
            },
            {
                name: 'Tempo Runs',
                sets: '1',
                reps: '20-25 minutes',
                details: '• Run at comfortably hard pace\n• 85-90% of maximum heart rate\n• Should feel challenging but sustainable\n• Focus on smooth, efficient form\n• Focus: Lactate threshold and speed endurance'
            }
        ]
    }
};

// Nutrition database
const nutritionDatabase = {
    preTraining: {
        light: [
            'Banana with almond butter (30-60 min before)',
            'Oatmeal with berries (1-2 hours before)',
            'Greek yogurt with honey (45 min before)',
            'Whole grain toast with jam (1 hour before)'
        ],
        moderate: [
            'Chicken and rice bowl (2-3 hours before)',
            'Pasta with lean protein (2-3 hours before)',
            'Quinoa salad with vegetables (2 hours before)',
            'Sweet potato with turkey (2-3 hours before)'
        ]
    },
    postTraining: {
        recovery: [
            'Protein shake with banana (within 30 min)',
            'Chocolate milk (within 30 min)',
            'Greek yogurt with granola (within 1 hour)',
            'Tuna sandwich on whole grain (within 1 hour)'
        ],
        muscle: [
            'Grilled chicken with quinoa (1-2 hours after)',
            'Salmon with sweet potato (1-2 hours after)',
            'Lean beef with brown rice (1-2 hours after)',
            'Eggs with avocado toast (1-2 hours after)'
        ]
    },
    daily: {
        breakfast: [
            'Oatmeal with nuts and fruit',
            'Scrambled eggs with whole grain toast',
            'Greek yogurt parfait with granola',
            'Smoothie bowl with protein powder'
        ],
        lunch: [
            'Grilled chicken salad with quinoa',
            'Turkey and avocado wrap',
            'Lentil soup with whole grain bread',
            'Salmon with roasted vegetables'
        ],
        dinner: [
            'Lean protein with brown rice and vegetables',
            'Grilled fish with sweet potato',
            'Turkey meatballs with pasta',
            'Stir-fry with tofu and brown rice'
        ],
        snacks: [
            'Mixed nuts and dried fruit',
            'Apple with peanut butter',
            'Hummus with vegetable sticks',
            'Protein bar (low sugar)'
        ]
    }
};

// DOM elements
const heightCmInput = document.getElementById('height-cm');
const heightFtInput = document.getElementById('height-ft');
const heightInInput = document.getElementById('height-in');
const weightKgInput = document.getElementById('weight-kg');
const weightLbsInput = document.getElementById('weight-lbs');
const ageInput = document.getElementById('age');
const positionSelect = document.getElementById('position');
const secondaryPositions = document.querySelectorAll('.secondary-position');
const trainingDaysInput = document.getElementById('training-days');
const dietaryRestrictionsInput = document.getElementById('dietary-restrictions');
const saveProfileBtn = document.getElementById('save-profile');
const generateWorkoutBtn = document.getElementById('generate-workout');

// Unit toggle buttons
const heightCmBtn = document.getElementById('height-cm-btn');
const heightFtBtn = document.getElementById('height-ft-btn');
const weightKgBtn = document.getElementById('weight-kg-btn');
const weightLbsBtn = document.getElementById('weight-lbs-btn');

// Stats display elements
const bmiValue = document.getElementById('bmi-value');
const targetWeight = document.getElementById('target-weight');
const bodyFat = document.getElementById('body-fat');

// Workout and nutrition display elements
const workoutTitle = document.getElementById('workout-title');
const workoutPlan = document.getElementById('workout-plan');

// Progress tracking elements
const logDate = document.getElementById('log-date');
const logWeight = document.getElementById('log-weight');
const addLogBtn = document.getElementById('add-log');
const weightHistory = document.getElementById('weight-history');

// Motivational quotes for rotating display
const motivationalQuotes = [
    "Rebuild Yourself and Get Signed",
    "Every Setback is a Setup for a Comeback",
    "Elite Standards, Elite Results",
    "Your Comeback Starts Today",
    "Train Like a Champion, Think Like a Winner",
    "From Recovery to Elite Performance",
    "Dedication Beats Talent When Talent Doesn't Work Hard",
    "The Comeback is Always Stronger Than the Setback",
    "AAF's Comeback Academy - Where Champions Return",
    "Your Next Chapter Starts Now"
];

// Biblical verses for athletes - hope and restoration
const biblicalVerses = [
    "I can do all things through Christ who strengthens me. - Philippians 4:13",
    "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. - Isaiah 40:31",
    "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. - Joshua 1:9",
    "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing. - Zephaniah 3:17",
    "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future. - Jeremiah 29:11",
    "He gives strength to the weary and increases the power of the weak. - Isaiah 40:29",
    "The Lord is my strength and my defense; he has given me victory. - Psalm 118:14",
    "She is clothed with strength and dignity; she can laugh at the days to come. - Proverbs 31:25",
    "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. - 2 Corinthians 4:16",
    "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
    "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
    "Be strong and take heart, all you who hope in the Lord. - Psalm 31:24"
];

let currentQuoteIndex = 0;
let currentVerseIndex = 0;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadPlayerData();
    setupEventListeners();
    updateStats();
    startQuoteRotation();
    startVerseRotation();
    updateWeightLogPlaceholder();
    
    // Set today's date as default
    logDate.valueAsDate = new Date();
});

function setupEventListeners() {
    saveProfileBtn.addEventListener('click', saveProfile);
    generateWorkoutBtn.addEventListener('click', generateWorkout);
    addLogBtn.addEventListener('click', addWeightLog);
    
    // Unit toggle listeners
    heightCmBtn.addEventListener('click', () => toggleHeightUnit('cm'));
    heightFtBtn.addEventListener('click', () => toggleHeightUnit('ft'));
    weightKgBtn.addEventListener('click', () => toggleWeightUnit('kg'));
    weightLbsBtn.addEventListener('click', () => toggleWeightUnit('lbs'));
    
    // Update stats when inputs change
    [heightCmInput, heightFtInput, heightInInput, weightKgInput, weightLbsInput, ageInput].forEach(input => {
        if (input) {
            input.addEventListener('input', updateStats);
        }
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function saveProfile() {
    // Get current height and weight values
    const heightValue = heightCmBtn.classList.contains('active') ? 
        parseFloat(heightCmInput.value) : 
        (heightFtInput.value && heightInInput.value ? feetToCm(parseInt(heightFtInput.value), parseInt(heightInInput.value)) : 0);
    
    const weightValue = weightKgBtn.classList.contains('active') ? 
        parseFloat(weightKgInput.value) : 
        (weightLbsInput.value ? lbsToKg(parseInt(weightLbsInput.value)) : 0);
    
    // Validate inputs
    if (!heightValue || !weightValue || !ageInput.value || !positionSelect.value) {
        alert('Please fill in all required fields (height, weight, age, position)');
        return;
    }
    
    // Get selected secondary positions
    const selectedSecondaryPositions = Array.from(secondaryPositions)
        .filter(checkbox => checkbox.checked && checkbox.value !== positionSelect.value)
        .map(checkbox => checkbox.value);
    
    // Save data
    playerData = {
        height: { 
            value: heightValue, 
            unit: heightCmBtn.classList.contains('active') ? 'cm' : 'ft' 
        },
        weight: { 
            value: weightValue, 
            unit: weightKgBtn.classList.contains('active') ? 'kg' : 'lbs' 
        },
        age: parseInt(ageInput.value),
        position: positionSelect.value,
        secondaryPositions: selectedSecondaryPositions,
        trainingDays: parseInt(trainingDaysInput.value) || 0,
        dietaryRestrictions: dietaryRestrictionsInput.value,
        weightHistory: playerData.weightHistory || []
    };
    
    localStorage.setItem('footballPlayerData', JSON.stringify(playerData));
    
    updateStats();
    generateNutritionPlan();
    generateWorkout(); // Regenerate workout schedule with new profile data
    
    // Show success message
    saveProfileBtn.textContent = 'Saved!';
    saveProfileBtn.style.background = 'var(--elite-green)';
    setTimeout(() => {
        saveProfileBtn.textContent = 'Save Profile';
        saveProfileBtn.style.background = '';
    }, 2000);
}

function loadPlayerData() {
    const saved = localStorage.getItem('footballPlayerData');
    if (saved) {
        playerData = JSON.parse(saved);
        
        // Handle legacy data format
        if (typeof playerData.height === 'number') {
            playerData.height = { value: playerData.height, unit: 'cm' };
        }
        if (typeof playerData.weight === 'number') {
            playerData.weight = { value: playerData.weight, unit: 'kg' };
        }
        
        // Populate height fields
        if (playerData.height && playerData.height.value) {
            if (playerData.height.unit === 'cm') {
                heightCmInput.value = playerData.height.value;
                toggleHeightUnit('cm');
            } else {
                const { feet, inches } = cmToFeet(playerData.height.value);
                heightFtInput.value = feet;
                heightInInput.value = inches;
                toggleHeightUnit('ft');
            }
        }
        
        // Populate weight fields
        if (playerData.weight && playerData.weight.value) {
            if (playerData.weight.unit === 'kg') {
                weightKgInput.value = playerData.weight.value;
                toggleWeightUnit('kg');
            } else {
                weightLbsInput.value = kgToLbs(playerData.weight.value);
                toggleWeightUnit('lbs');
            }
        }
        
        // Populate other fields
        ageInput.value = playerData.age || '';
        positionSelect.value = playerData.position || '';
        trainingDaysInput.value = playerData.trainingDays || '';
        dietaryRestrictionsInput.value = playerData.dietaryRestrictions || '';
        
        // Populate secondary positions
        if (playerData.secondaryPositions) {
            secondaryPositions.forEach(checkbox => {
                checkbox.checked = playerData.secondaryPositions.includes(checkbox.value);
            });
        }
        
        updateStats();
        generateNutritionPlan();
        generateWorkout();
        displayWeightHistory();
    }
}

function updateStats() {
    // Get current height in cm
    let heightCm = 0;
    if (heightCmBtn.classList.contains('active') && heightCmInput.value) {
        heightCm = parseFloat(heightCmInput.value);
    } else if (heightFtBtn.classList.contains('active') && heightFtInput.value && heightInInput.value) {
        heightCm = feetToCm(parseInt(heightFtInput.value), parseInt(heightInInput.value));
    }
    
    // Get current weight in kg
    let weightKg = 0;
    if (weightKgBtn.classList.contains('active') && weightKgInput.value) {
        weightKg = parseFloat(weightKgInput.value);
    } else if (weightLbsBtn.classList.contains('active') && weightLbsInput.value) {
        weightKg = lbsToKg(parseFloat(weightLbsInput.value));
    }
    
    const age = parseInt(ageInput.value);
    
    if (heightCm && weightKg) {
        // Calculate BMI
        const bmi = weightKg / ((heightCm / 100) ** 2);
        bmiValue.textContent = bmi.toFixed(1);
        
        // Calculate target weight range for athletes
        const minWeight = 18.5 * ((heightCm / 100) ** 2);
        const maxWeight = 24.9 * ((heightCm / 100) ** 2);
        
        // Display in user's preferred unit
        if (weightLbsBtn.classList.contains('active')) {
            const minLbs = kgToLbs(minWeight);
            const maxLbs = kgToLbs(maxWeight);
            targetWeight.textContent = `${minLbs}-${maxLbs} lbs`;
        } else {
            targetWeight.textContent = `${minWeight.toFixed(0)}-${maxWeight.toFixed(0)} kg`;
        }
        
        // Estimate body fat percentage (rough calculation for athletes)
        let estimatedBodyFat;
        if (bmi < 20) estimatedBodyFat = '8-12%';
        else if (bmi < 23) estimatedBodyFat = '10-15%';
        else if (bmi < 25) estimatedBodyFat = '12-18%';
        else estimatedBodyFat = '15-20%';
        
        bodyFat.textContent = estimatedBodyFat;
    } else {
        bmiValue.textContent = '--';
        targetWeight.textContent = '--';
        bodyFat.textContent = '--';
    }
}

function generateWorkout() {
    if (!playerData.position) {
        alert('Please save your profile first to generate a personalized workout');
        return;
    }
    
    const position = playerData.position;
    const trainingDays = playerData.trainingDays || 0;
    
    // Update title
    workoutTitle.textContent = `${position.charAt(0).toUpperCase() + position.slice(1)} Elite Training Program`;
    
    // Generate weekly schedule
    const weeklySchedule = generateWeeklyWorkoutSchedule(position, trainingDays);
    
    // Get current day
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Generate table HTML
    const scheduleBody = document.getElementById('workout-schedule-body');
    let scheduleHTML = '';
    
    weeklySchedule.forEach((day, index) => {
        const isToday = index === today;
        const rowClass = isToday ? 'today' : '';
        
        scheduleHTML += `
            <tr class="${rowClass}">
                <td class="day-column">${days[index]}</td>
                <td class="session-content">${day.morning}</td>
                <td class="session-content">${day.evening}</td>
                <td class="focus-column">${day.focus}</td>
            </tr>
        `;
    });
    
    scheduleBody.innerHTML = scheduleHTML;
}

function generateWeeklyWorkoutSchedule(position, trainingDays) {
    const exercises = detailedWorkoutDatabase[position];
    
    // Adjust intensity based on team training days
    let intensity = 'moderate';
    if (trainingDays >= 5) intensity = 'light';
    else if (trainingDays <= 2) intensity = 'intense';
    
    const schedule = [
        // Sunday
        {
            morning: intensity === 'light' ? 
                '🚶 Active Recovery Walk\n• 20-30 minute easy walk\n• Focus on breathing and relaxation\n• Light stretching afterward' : 
                '🧘 Mobility & Stretching\n• 15 minutes dynamic warm-up\n• 20 minutes static stretching\n• Focus on tight areas',
            evening: '😴 Complete Rest\n• No physical activity\n• Focus on hydration and nutrition\n• Mental preparation for week ahead',
            focus: 'Recovery & Preparation'
        },
        // Monday
        {
            morning: formatWorkoutDetails(getRandomExercise(exercises.strength)),
            evening: formatWorkoutDetails(getRandomExercise(exercises.cardio)),
            focus: 'Strength & Power Development'
        },
        // Tuesday
        {
            morning: formatWorkoutDetails(getRandomExercise(exercises.agility)),
            evening: '⚽ Technical Skills Practice\n• Ball control drills - 20 minutes\n• Passing accuracy - 15 minutes\n• Position-specific techniques - 15 minutes\n• Cool-down stretching - 10 minutes',
            focus: 'Speed & Technical Skills'
        },
        // Wednesday
        {
            morning: formatWorkoutDetails(getRandomExercise(exercises.strength)),
            evening: formatWorkoutDetails(getRandomExercise(exercises.agility)),
            focus: 'Strength & Coordination'
        },
        // Thursday
        {
            morning: formatWorkoutDetails(getRandomExercise(exercises.cardio)),
            evening: `🎯 Position-Specific Training\n• ${position} drills - 25 minutes\n• Small-sided games - 20 minutes\n• Tactical positioning - 15 minutes\n• Recovery stretching - 10 minutes`,
            focus: 'Endurance & Position Skills'
        },
        // Friday
        {
            morning: formatWorkoutDetails(getRandomExercise(exercises.agility)),
            evening: formatWorkoutDetails(getRandomExercise(exercises.strength)),
            focus: 'Peak Performance Preparation'
        },
        // Saturday
        {
            morning: intensity === 'intense' ? 
                formatWorkoutDetails(getRandomExercise(exercises.cardio)) : 
                '🏃 Light Training Session\n• 15 minutes easy jogging\n• 10 minutes ball work\n• 15 minutes stretching\n• Focus on feeling loose and ready',
            evening: '🏆 Match Preparation\n• Tactical review - 20 minutes\n• Set piece practice - 15 minutes\n• Mental visualization - 10 minutes\n• Early rest and hydration',
            focus: 'Game Readiness'
        }
    ];
    
    return schedule;
}

function formatWorkoutDetails(exercise) {
    return `💪 ${exercise.name}\n📊 ${exercise.sets} sets × ${exercise.reps}\n\n${exercise.details}`;
}

function getRandomExercise(exerciseArray) {
    return exerciseArray[Math.floor(Math.random() * exerciseArray.length)];
}

function generateNutritionPlan() {
    if (!playerData.weight || !playerData.height) return;
    
    // Update nutrition stats
    const dailyCalories = calculateDailyCalories();
    const proteinTarget = (playerData.weight.value * 1.6).toFixed(0);
    const waterIntake = calculateDailyWaterIntake();
    
    document.getElementById('daily-calories').textContent = `${dailyCalories} calories`;
    document.getElementById('daily-protein').textContent = `${proteinTarget}g protein`;
    document.getElementById('daily-water').textContent = `${waterIntake}L water`;
    
    // Generate weekly nutrition schedule
    const weeklyNutrition = generateWeeklyNutritionSchedule();
    
    // Get current day
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Generate table HTML
    const scheduleBody = document.getElementById('nutrition-schedule-body');
    let scheduleHTML = '';
    
    weeklyNutrition.forEach((day, index) => {
        const isToday = index === today;
        const rowClass = isToday ? 'today' : '';
        
        scheduleHTML += `
            <tr class="${rowClass}">
                <td class="day-column">${days[index]}</td>
                <td class="session-content">
                    <div class="meal-content-item">${day.breakfast}</div>
                </td>
                <td class="session-content">
                    <div class="meal-content-item">${day.preTraining}</div>
                </td>
                <td class="session-content">
                    <div class="meal-content-item">${day.postTraining}</div>
                </td>
                <td class="session-content">
                    <div class="meal-content-item">${day.dinner}</div>
                </td>
            </tr>
        `;
    });
    
    scheduleBody.innerHTML = scheduleHTML;
}

function generateWeeklyNutritionSchedule() {
    const restrictions = playerData.dietaryRestrictions.toLowerCase();
    
    // Filter meals by restrictions
    const breakfastOptions = filterByRestrictions(nutritionDatabase.daily.breakfast, restrictions);
    const preTrainingOptions = filterByRestrictions([...nutritionDatabase.preTraining.light, ...nutritionDatabase.preTraining.moderate], restrictions);
    const postTrainingOptions = filterByRestrictions([...nutritionDatabase.postTraining.recovery, ...nutritionDatabase.postTraining.muscle], restrictions);
    const dinnerOptions = filterByRestrictions(nutritionDatabase.daily.dinner, restrictions);
    
    const schedule = [];
    
    for (let i = 0; i < 7; i++) {
        schedule.push({
            breakfast: getRandomMeal(breakfastOptions),
            preTraining: getRandomMeal(preTrainingOptions),
            postTraining: getRandomMeal(postTrainingOptions),
            dinner: getRandomMeal(dinnerOptions)
        });
    }
    
    return schedule;
}

function getRandomMeal(mealArray) {
    return mealArray[Math.floor(Math.random() * mealArray.length)];
}

function filterByRestrictions(meals, restrictions) {
    if (!restrictions) return meals;
    
    return meals.filter(meal => {
        const mealLower = meal.toLowerCase();
        const restrictionWords = restrictions.split(/[,\s]+/).filter(word => word.length > 2);
        
        return !restrictionWords.some(restriction => 
            mealLower.includes(restriction.toLowerCase())
        );
    });
}

function calculateDailyCalories() {
    if (!playerData.weight || !playerData.height || !playerData.age) return 2500;
    
    const weightKg = playerData.weight.value;
    const heightCm = playerData.height.value;
    
    // Harris-Benedict equation for athletes
    const bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * playerData.age);
    const activityMultiplier = 1.725; // Very active
    
    return Math.round(bmr * activityMultiplier);
}

function calculateDailyWaterIntake() {
    if (!playerData.weight) return '3.0';
    
    const weightKg = playerData.weight.value;
    const trainingDays = playerData.trainingDays || 0;
    
    // Base water intake: 35ml per kg of body weight
    let baseIntake = (weightKg * 35) / 1000; // Convert to liters
    
    // Add extra for training intensity
    if (trainingDays >= 5) {
        baseIntake += 1.0; // High training volume
    } else if (trainingDays >= 3) {
        baseIntake += 0.7; // Moderate training
    } else {
        baseIntake += 0.5; // Light training
    }
    
    // Add extra 500ml for each training session
    const dailyTrainingBonus = (trainingDays / 7) * 0.5;
    baseIntake += dailyTrainingBonus;
    
    return baseIntake.toFixed(1);
}

function addWeightLog() {
    const date = logDate.value;
    const weight = parseFloat(logWeight.value);
    
    if (!date || !weight) {
        alert('Please enter both date and weight');
        return;
    }
    
    // Convert weight to kg for storage (standardized)
    const weightInKg = weightLbsBtn.classList.contains('active') ? lbsToKg(weight) : weight;
    
    // Add to weight history
    playerData.weightHistory = playerData.weightHistory || [];
    playerData.weightHistory.push({ date, weight: weightInKg });
    
    // Sort by date
    playerData.weightHistory.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Save to localStorage
    localStorage.setItem('footballPlayerData', JSON.stringify(playerData));
    
    // Clear inputs
    logWeight.value = '';
    logDate.valueAsDate = new Date();
    
    // Update display
    displayWeightHistory();
    
    // Update current weight if this is today's entry
    const today = new Date().toISOString().split('T')[0];
    if (date === today) {
        if (weightKgBtn.classList.contains('active')) {
            weightKgInput.value = weightInKg;
        } else {
            weightLbsInput.value = weight;
        }
        playerData.weight = { value: weightInKg, unit: 'kg' };
        updateStats();
    }
}

function displayWeightHistory() {
    if (!playerData.weightHistory || playerData.weightHistory.length === 0) {
        weightHistory.innerHTML = '<p>No weight entries yet</p>';
        return;
    }
    
    const isLbsActive = weightLbsBtn.classList.contains('active');
    const unit = isLbsActive ? 'lbs' : 'kg';
    
    const historyHTML = playerData.weightHistory
        .slice(-10) // Show last 10 entries
        .reverse()
        .map(entry => {
            const displayWeight = isLbsActive ? kgToLbs(entry.weight) : entry.weight;
            return `
                <div class="weight-entry">
                    <span>${new Date(entry.date).toLocaleDateString()}</span>
                    <span>${displayWeight} ${unit}</span>
                </div>
            `;
        }).join('');
    
    weightHistory.innerHTML = historyHTML;
}

function startQuoteRotation() {
    const quoteElement = document.getElementById('rotating-quote');
    if (!quoteElement) return;
    
    setInterval(() => {
        // Fade out current quote
        quoteElement.style.opacity = '0';
        quoteElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            // Change quote
            currentQuoteIndex = (currentQuoteIndex + 1) % motivationalQuotes.length;
            quoteElement.textContent = `"${motivationalQuotes[currentQuoteIndex]}"`;
            
            // Fade in new quote
            quoteElement.style.opacity = '1';
            quoteElement.style.transform = 'translateY(0)';
        }, 300);
    }, 4000); // Change every 4 seconds
}

function startVerseRotation() {
    const verseElement = document.getElementById('rotating-verse');
    if (!verseElement) return;
    
    setInterval(() => {
        // Fade out current verse
        verseElement.style.opacity = '0';
        verseElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            // Change verse
            currentVerseIndex = (currentVerseIndex + 1) % biblicalVerses.length;
            verseElement.textContent = `"${biblicalVerses[currentVerseIndex]}"`;
            
            // Fade in new verse
            verseElement.style.opacity = '1';
            verseElement.style.transform = 'translateY(0)';
        }, 500);
    }, 8000); // Change every 8 seconds (slower than quotes)
}

// Unit conversion functions
function cmToFeet(cm) {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return { feet, inches };
}

function feetToCm(feet, inches) {
    return Math.round((feet * 12 + inches) * 2.54);
}

function kgToLbs(kg) {
    return Math.round(kg * 2.20462);
}

function lbsToKg(lbs) {
    return Math.round(lbs / 2.20462);
}

// Unit toggle functions
function toggleHeightUnit(unit) {
    const cmGroup = document.getElementById('height-cm-input');
    const ftGroup = document.getElementById('height-ft-input');
    
    if (unit === 'cm') {
        heightCmBtn.classList.add('active');
        heightFtBtn.classList.remove('active');
        cmGroup.classList.remove('hidden');
        ftGroup.classList.add('hidden');
        
        // Convert from ft/in to cm if values exist
        if (heightFtInput.value && heightInInput.value) {
            const cm = feetToCm(parseInt(heightFtInput.value), parseInt(heightInInput.value));
            heightCmInput.value = cm;
        }
    } else {
        heightFtBtn.classList.add('active');
        heightCmBtn.classList.remove('active');
        ftGroup.classList.remove('hidden');
        cmGroup.classList.add('hidden');
        
        // Convert from cm to ft/in if value exists
        if (heightCmInput.value) {
            const { feet, inches } = cmToFeet(parseInt(heightCmInput.value));
            heightFtInput.value = feet;
            heightInInput.value = inches;
        }
    }
    updateStats();
}

function toggleWeightUnit(unit) {
    const kgGroup = document.getElementById('weight-kg-input');
    const lbsGroup = document.getElementById('weight-lbs-input');
    
    if (unit === 'kg') {
        weightKgBtn.classList.add('active');
        weightLbsBtn.classList.remove('active');
        kgGroup.classList.remove('hidden');
        lbsGroup.classList.add('hidden');
        
        // Convert from lbs to kg if value exists
        if (weightLbsInput.value) {
            const kg = lbsToKg(parseInt(weightLbsInput.value));
            weightKgInput.value = kg;
        }
    } else {
        weightLbsBtn.classList.add('active');
        weightKgBtn.classList.remove('active');
        lbsGroup.classList.remove('hidden');
        kgGroup.classList.add('hidden');
        
        // Convert from kg to lbs if value exists
        if (weightKgInput.value) {
            const lbs = kgToLbs(parseInt(weightKgInput.value));
            weightLbsInput.value = lbs;
        }
    }
    updateWeightLogPlaceholder();
    updateStats();
    displayWeightHistory();
}

function updateWeightLogPlaceholder() {
    const isLbsActive = weightLbsBtn.classList.contains('active');
    const unit = isLbsActive ? 'lbs' : 'kg';
    logWeight.placeholder = `Weight (${unit})`;
}