// stores/round.js
import { defineStore } from 'pinia';
import { supabase } from '@/lib/supabaseClient';

export const useRoundStore = defineStore('round', {
  state: () => ({
    roundId: null,
    categoryId: null,
    player1Uid: null,
    player2Uid: null,
    player1Song: null,
    player2Song: null,
    player1Details: null,
    player2Details: null,
  }),
  actions: {
    async startRound(categoryId) {
      this.categoryId = categoryId;

      const { data, error } = await supabase
        .from('rounds')
        .upsert({ category_id: this.categoryId }, { returning: 'representation' })
        .single()
        .select();
      if (error) {
        console.error(error);
      } else {
        this.roundId = data.id;
        console.log(this.roundId);
      }
    },
    async setPlayer1Uid(uId) {
      if (this.roundId) {
        const { error } = await supabase
          .from('rounds')
          .update({ player1_uid: uId })
          .eq('id', this.roundId);
        if (error) {
          console.error(error);
        } else {
          this.player1Uid = uId;
        }
      }
    },
    async setPlayer2Uid(uId) {
      if (this.roundId) {
        const { error } = await supabase
          .from('rounds')
          .update({ player2_uid: uId })
          .eq('id', this.roundId);
        if (error) {
          console.error(error);
        } else {
          this.player2Uid = uId;
        }
      }
    },
    async setPlayer1Song(songId) {
      if (this.roundId) {
        const { error } = await supabase
          .from('rounds')
          .update({ player1_song: songId })
          .eq('id', this.roundId);
        if (error) {
          console.error(error);
        } else {
          this.player1Song = songId;
        }
      }
    },
    async setPlayer2Song(songId) {
      if (this.roundId) {
        const { error } = await supabase
          .from('rounds')
          .update({ player2_song: songId })
          .eq('id', this.roundId);
        if (error) {
          console.error(error);
        } else {
          this.player2Song = songId;
        }
      }
    },
    async fetchPlayerDetails(playerUid, playerNumber) {
      const { data, error } = await supabase
        .from('players')
        .select('name, avatar_url')
        .eq('uid', playerUid)
        .single();
      if (error) {
        console.error(`Error fetching details for player ${playerNumber}:`, error);
      } else {
        if (playerNumber === 1) {
          this.player1Details = data;
        } else if (playerNumber === 2) {
          this.player2Details = data;
        }
      }
    }
  },
});
