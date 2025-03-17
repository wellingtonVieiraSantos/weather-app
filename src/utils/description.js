import day from '../assets/clear-day.svg'
import night from '../assets/clear-night.svg'
import partlyCloudDay from '../assets/partly-cloudy-day.svg'
import partlyCloudNight from '../assets/partly-cloudy-night.svg'
import cloudy from '../assets/cloudy.svg'
import fog from '../assets/fog.svg'
import drizzle from '../assets/drizzle.svg'
import rain from '../assets/rain.svg'
import sleet from '../assets/sleet.svg'
import snow from '../assets/snow.svg'
import thunderstorms from '../assets/thunderstorms.svg'
import thunderstormsRain from '../assets/thunderstorms-rain.svg'
import hail from '../assets/hail.svg'
import snowfall from '../assets/snowfall.svg'

export const description = {
  0: {
    day: {
      description: 'Ensolarado',
      image: day
    },
    night: {
      description: 'Limpo',
      image: night
    }
  },
  1: {
    day: {
      description: 'Principalmente ensolarado',
      image: day
    },
    night: {
      description: 'Principalmente Limpo',
      image: night
    }
  },
  2: {
    day: {
      description: 'Parcialmente nublado',
      image: partlyCloudDay
    },
    night: {
      description: 'Parcialmente nublado',
      image: partlyCloudNight
    }
  },
  3: {
    day: {
      description: 'Nublado',
      image: cloudy
    },
    night: {
      description: 'Nublado',
      image: cloudy
    }
  },
  45: {
    day: {
      description: 'Enevoado',
      image: fog
    },
    night: {
      description: 'Enevoado',
      image: fog
    }
  },
  48: {
    day: {
      description: 'Nevoeiro de geada',
      image: fog
    },
    night: {
      description: 'Nevoeiro de geada',
      image: fog
    }
  },
  51: {
    day: {
      description: 'Garoa leve',
      image: drizzle
    },
    night: {
      description: 'Garoa leve',
      image: drizzle
    }
  },
  53: {
    day: {
      description: 'Chuvisco',
      image: drizzle
    },
    night: {
      description: 'Chuvisco',
      image: drizzle
    }
  },
  55: {
    day: {
      description: 'Chuvisco forte',
      image: drizzle
    },
    night: {
      description: 'Chuvisco forte',
      image: drizzle
    }
  },
  56: {
    day: {
      description: 'Chuvisco leve e gelado',
      image: sleet
    },
    night: {
      description: 'Chuvisco leve e gelado',
      image: sleet
    }
  },
  57: {
    day: {
      description: 'Chuvisco congelante',
      image: sleet
    },
    night: {
      description: 'Chuvisco congelante',
      image: sleet
    }
  },
  61: {
    day: {
      description: 'Chuva leve',
      image: rain
    },
    night: {
      description: 'Chuva leve',
      image: rain
    }
  },
  63: {
    day: {
      description: 'Chuva',
      image: rain
    },
    night: {
      description: 'Chuva',
      image: rain
    }
  },
  65: {
    day: {
      description: 'Chuva forte',
      image: rain
    },
    night: {
      description: 'Chuva forte',
      image: rain
    }
  },
  66: {
    day: {
      description: 'Chuva leve e congelante',
      image: sleet
    },
    night: {
      description: 'Chuva leve e congelante',
      image: sleet
    }
  },
  67: {
    day: {
      description: 'Chuva congelante',
      image: sleet
    },
    night: {
      description: 'Chuva congelante',
      image: sleet
    }
  },
  71: {
    day: {
      description: 'Pouca neve',
      image: snow
    },
    night: {
      description: 'Pouca neve',
      image: snow
    }
  },
  73: {
    day: {
      description: 'Neve',
      image: snow
    },
    night: {
      description: 'Neve',
      image: snow
    }
  },
  75: {
    day: {
      description: 'Neve forte',
      image: snow
    },
    night: {
      description: 'Neve forte',
      image: snow
    }
  },
  77: {
    day: {
      description: 'Flocos de neve',
      image: snow
    },
    night: {
      description: 'Flocos de neve',
      image: snow
    }
  },
  80: {
    day: {
      description: 'Tempestade leve',
      image: thunderstormsRain
    },
    night: {
      description: 'Tempestade leve',
      image: thunderstormsRain
    }
  },
  81: {
    day: {
      description: 'Tempestade',
      image: thunderstormsRain
    },
    night: {
      description: 'Tempestade',
      image: thunderstormsRain
    }
  },
  82: {
    day: {
      description: 'Tempestade forte',
      image: thunderstormsRain
    },
    night: {
      description: 'Tempestade forte',
      image: thunderstormsRain
    }
  },
  85: {
    day: {
      description: 'Nevasca leve',
      image: snowfall
    },
    night: {
      description: 'Nevasca leve',
      image: snowfall
    }
  },
  86: {
    day: {
      description: 'Nevasca',
      image: snowfall
    },
    night: {
      description: 'Nevasca',
      image: snowfall
    }
  },
  95: {
    day: {
      description: 'Trovoada',
      image: thunderstorms
    },
    night: {
      description: 'Trovoada',
      image: thunderstorms
    }
  },
  96: {
    day: {
      description: 'Trovoada leves com granizo',
      image: hail
    },
    night: {
      description: 'Trovoada leves com granizo',
      image: hail
    }
  },
  99: {
    day: {
      description: 'Trovoada com granizo',
      image: hail
    },
    night: {
      description: 'Trovoada com granizo',
      image: hail
    }
  }
}
