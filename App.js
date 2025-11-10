import React, { useState } from 'react';
import { Calendar, ShoppingCart, TrendingDown, ChevronRight, Apple, Utensils, Coffee, Sunset } from 'lucide-react';

const MealPlannerApp = () => {
  const [activeTab, setActiveTab] = useState('meals');
  const [selectedDay, setSelectedDay] = useState('Mon');

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const meals = {
    Mon: {
      breakfast: { name: 'Spinach Omelette', emoji: '🍳', items: ['eggs', 'spinach', 'tomatoes', 'bread'] },
      lunch: { name: 'Grilled Chicken + Pumpkin + Broccoli', emoji: '🍗', items: ['chicken', 'pumpkin', 'broccoli', 'rice'] },
      snack: { name: 'Fruit Bowl', emoji: '🍉', items: ['melon', 'guava', 'banana'] },
      dinner: { name: 'Chicken & Veg Stir-Fry', emoji: '🥘', items: ['chicken', 'broccoli', 'carrots'] }
    },
    Tue: {
      breakfast: { name: 'Greek Yogurt Bowl', emoji: '🥣', items: ['yogurt', 'banana', 'chia', 'honey', 'tomatoes'] },
      lunch: { name: 'Grilled Salmon + Spinach', emoji: '🐟', items: ['fish', 'spinach', 'carrots', 'rice'] },
      snack: { name: 'Fruit Bowl', emoji: '🍉', items: ['melon', 'guava', 'banana'] },
      dinner: { name: 'Fish + Lentil Soup', emoji: '🍲', items: ['fish', 'lentils', 'spinach'] }
    },
    Wed: {
      breakfast: { name: 'Tofu Scramble', emoji: '🍳', items: ['tofu', 'spinach', 'tomatoes', 'bread'] },
      lunch: { name: 'Lentil Curry + Sweet Potato', emoji: '🍛', items: ['lentils', 'sweet potato', 'spinach'] },
      snack: { name: 'Fruit Bowl', emoji: '🍉', items: ['melon', 'guava', 'banana'] },
      dinner: { name: 'Sweet Potato + Boiled Eggs', emoji: '🥚', items: ['sweet potato', 'eggs', 'spinach'] }
    },
    Thu: {
      breakfast: { name: 'Sweet Potato + Eggs', emoji: '🍠', items: ['sweet potato', 'eggs', 'tomatoes'] },
      lunch: { name: 'Chickpea Salad Bowl', emoji: '🥗', items: ['chickpeas', 'cucumber', 'guava', 'tomatoes'] },
      snack: { name: 'Fruit Bowl', emoji: '🍉', items: ['melon', 'guava', 'banana'] },
      dinner: { name: 'Pumpkin Soup', emoji: '🎃', items: ['pumpkin', 'bread'] }
    },
    Fri: {
      breakfast: { name: 'Oats with Berries', emoji: '🥣', items: ['oats', 'berries', 'flax seeds', 'tomatoes'] },
      lunch: { name: 'Chicken Stir-Fry', emoji: '🍗', items: ['chicken', 'veggies', 'rice'] },
      snack: { name: 'Fruit Bowl', emoji: '🍉', items: ['melon', 'guava', 'banana'] },
      dinner: { name: 'Chickpea & Tofu Salad', emoji: '🥗', items: ['chickpeas', 'tofu', 'greens'] }
    },
    Sat: {
      breakfast: { name: 'Avocado Egg Toast', emoji: '🥑', items: ['avocado', 'eggs', 'bread', 'tomatoes'] },
      lunch: { name: 'Tofu + Veggie Rice Bowl', emoji: '🍚', items: ['tofu', 'broccoli', 'carrots', 'spinach', 'rice'] },
      snack: { name: 'Fruit Bowl', emoji: '🍉', items: ['melon', 'guava', 'banana'] },
      dinner: { name: 'Chicken Soup', emoji: '🍲', items: ['chicken', 'salad'] }
    },
    Sun: {
      breakfast: { name: 'Greek Yogurt + Fruit', emoji: '🥣', items: ['yogurt', 'melon', 'banana', 'guava', 'nuts', 'tomatoes'] },
      lunch: { name: 'Fish + Pumpkin Soup', emoji: '🐟', items: ['fish', 'pumpkin', 'salad'] },
      snack: { name: 'Fruit Bowl', emoji: '🍉', items: ['melon', 'guava', 'banana'] },
      dinner: { name: 'Tofu & Veg Bowl', emoji: '🥗', items: ['tofu', 'broccoli', 'rice'] }
    }
  };

  const groceries = [
    { category: 'Vegetables', items: [
      { name: 'Beetroot', qty: '7 medium', used: 1, perDay: true },
      { name: 'Carrots', qty: '10-12 medium', used: 1.5, perDay: true },
      { name: 'Tomatoes', qty: '14-16', used: 2, perDay: true },
      { name: 'Spinach', qty: '3 packs', used: 0.4, perDay: true },
      { name: 'Broccoli', qty: '3 heads', used: 0.4, perDay: false },
      { name: 'Pumpkin', qty: '2 medium', used: 0.3, perDay: false },
      { name: 'Sweet Potatoes', qty: '6-7 medium', used: 1, perDay: false },
      { name: 'Cucumber', qty: '3', used: 0.4, perDay: false }
    ]},
    { category: 'Protein', items: [
      { name: 'Eggs', qty: '24 eggs', used: 3.4, perDay: true },
      { name: 'Chicken', qty: '1.2-1.5 kg', used: 200, perDay: false, unit: 'g' },
      { name: 'Fish', qty: '1 kg', used: 150, perDay: false, unit: 'g' },
      { name: 'Tofu', qty: '4 blocks', used: 0.6, perDay: false },
      { name: 'Greek Yogurt', qty: '1 kg', used: 150, perDay: false, unit: 'g' }
    ]},
    { category: 'Fruits', items: [
      { name: 'Bananas', qty: '10-12', used: 1.5, perDay: true },
      { name: 'Melons', qty: '2 large', used: 0.3, perDay: true },
      { name: 'Guava', qty: '4-5', used: 0.7, perDay: true },
      { name: 'Berries', qty: '500g', used: 70, perDay: false, unit: 'g' }
    ]},
    { category: 'Carbs & Grains', items: [
      { name: 'Brown Rice', qty: '2 kg', used: 200, perDay: false, unit: 'g', leftover: true },
      { name: 'Bread', qty: '2 loaves', used: 0.3, perDay: false },
      { name: 'Oats', qty: '1 kg', used: 100, perDay: false, unit: 'g', leftover: true }
    ]}
  ];

  const getDayProgress = (day) => {
    const dayIndex = days.indexOf(day);
    return ((dayIndex + 1) / 7) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-slate-800 to-emerald-950">
      {/* Header */}
      <div className="bg-stone-900/80 backdrop-blur-sm shadow-xl border-b border-amber-900/30">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-amber-100 font-serif">✦ Weekly Meal Plan ✦</h1>
              <p className="text-sm text-stone-400">Healthy meals for 2 people • 7 days of enchantment</p>
            </div>
            <div className="flex gap-2">
              <div className="bg-emerald-900/50 border border-emerald-700/30 px-3 py-1 rounded-full text-xs font-medium text-emerald-300">
                Clear Skin ✨
              </div>
              <div className="bg-amber-900/50 border border-amber-700/30 px-3 py-1 rounded-full text-xs font-medium text-amber-300">
                Healthy Hair 💪
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-md p-1 flex gap-1">
          <button
            onClick={() => setActiveTab('meals')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'meals'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Calendar className="inline-block w-5 h-5 mr-2" />
            Weekly Meals
          </button>
          <button
            onClick={() => setActiveTab('grocery')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'grocery'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <ShoppingCart className="inline-block w-5 h-5 mr-2" />
            Grocery List
          </button>
          <button
            onClick={() => setActiveTab('usage')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'usage'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <TrendingDown className="inline-block w-5 h-5 mr-2" />
            Daily Usage
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {activeTab === 'meals' && (
          <div className="space-y-4">
            {/* Day Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedDay === day
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Meals for Selected Day */}
            <div className="grid gap-4">
              {['breakfast', 'lunch', 'snack', 'dinner'].map((mealType, idx) => {
                const meal = meals[selectedDay][mealType];
                const icons = { breakfast: Coffee, lunch: Utensils, snack: Apple, dinner: Sunset };
                const Icon = icons[mealType];
                const colors = {
                  breakfast: 'from-amber-400 to-orange-400',
                  lunch: 'from-emerald-400 to-teal-400',
                  snack: 'from-pink-400 to-rose-400',
                  dinner: 'from-indigo-400 to-purple-400'
                };

                return (
                  <div
                    key={mealType}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                    style={{
                      animation: `slideIn 0.5s ease-out ${idx * 0.1}s both`
                    }}
                  >
                    <div className={`bg-gradient-to-r ${colors[mealType]} p-4 text-white`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className="w-6 h-6" />
                          <div>
                            <div className="text-xs font-medium opacity-90 uppercase">
                              {mealType}
                            </div>
                            <div className="text-lg font-bold">
                              {meal.name} {meal.emoji}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {meal.items.map((item, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'grocery' && (
          <div className="space-y-4">
            {groceries.map((category, idx) => (
              <div
                key={category.category}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
                style={{
                  animation: `slideIn 0.5s ease-out ${idx * 0.1}s both`
                }}
              >
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white">
                  <h3 className="text-lg font-bold">{category.category}</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {category.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.qty}</div>
                        </div>
                        {item.leftover ? (
                          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                            Leftover ♻️
                          </div>
                        ) : (
                          <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                            Will Finish ✓
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'usage' && (
          <div className="space-y-4">
            {groceries.map((category, idx) => (
              <div
                key={category.category}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
                style={{
                  animation: `slideIn 0.5s ease-out ${idx * 0.1}s both`
                }}
              >
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4 text-white">
                  <h3 className="text-lg font-bold">{category.category}</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    {category.items.map((item, i) => {
                      const unit = item.unit || 'pc';
                      const dailyUse = item.perDay ? `${item.used} ${unit}/day` : `~${item.used} ${unit} total`;
                      
                      return (
                        <div key={i} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-600">{dailyUse}</div>
                          </div>
                          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-1000"
                              style={{
                                width: item.leftover ? '70%' : '100%',
                                animation: `progress 2s ease-out ${i * 0.1}s both`
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes progress {
          from {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MealPlannerApp;
