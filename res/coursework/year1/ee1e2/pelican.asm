; Authors		Yousef Amar & Mohamad Sobhy
; Date			17/3/2011
; Device		PIC16F84
; Oscillator	XT (4MHZ)
; Watchdog		Disabled
; Function		Simulates Pelican Crossing
; Bit config	RB0 as an input, the rest of PORTB as outputs (0BRAGrgI)
; --------- Sub-Routines Functions ----------
; DEFAULT		Sets the lights to their default state
; BUTTON		The interrupt trigger
; PEDSEQ		The routine triggered by the interrupt
; AMBERFL		Flashes Amber light 3 times in 1s
; RED			Turns on red light for 1s
; DELAY			A 0.2 second delay
; DELAY1S		A 1s delay
; ------------- General Equates -------------
F			EQU		1
W			EQU		0
INTF		EQU		1
INTE		EQU		4
GIE			EQU		7
AMBERBIT	EQU		4
BUZZBIT		EQU		6
REDLT		EQU		0x00
GREENLT		EQU		0x01
; ----------- SP Register Equates -----------
PC			EQU		0x02
PORTB		EQU		0x06
INTCON		EQU		0x0B
; ----------- GP Register Equates -----------
MCOUNT		EQU		0x0D
NCOUNT		EQU		0x0E
FCOUNT		EQU		0x0F
DCOUNT		EQU		0x10
; ---------- Memory location specs ----------
			ORG		0x00
			GOTO	START
			ORG		0x04
			GOTO	BUTTON		
; --------------- Main Program --------------
START		NOP
CONF		MOVLW	0x01			; RB0 as input, the rest as outputs (0BRAGrgI)
			TRIS	PORTB			; CONFIG can't be used as a label apparently
			CLRF	PORTB
			CALL	DEFAULT
			BSF		INTCON,GIE		;\ Enable Interrupt
			BSF		INTCON,INTE		;/
LOOP		GOTO	LOOP

DEFAULT		MOVLW	GREENLT			; Default GREEN and PRED
			CALL	LTABLE
			MOVWF	PORTB
			RETURN

BUTTON		CALL	PEDSEQ
			CALL	DEFAULT
			BCF		INTCON,INTF		; Clear Interrupt flag at end
			RETFIE

LTABLE		ADDWF	PC,F			; Look-up table for LED output
					;(0BRAGrgI)
			RETLW	B'00100010'
			RETLW	B'00001100'

PEDSEQ		CALL	AMBERFL			; First AMBER
			CALL	RED				; Then RED & Buzzer
			CALL	AMBERFL			; Then AMBER
			RETURN					; Then repeat

AMBERFL		CLRF	PORTB			; Off any remaining lights
			MOVLW	0x03			; Flash 3 times in 1s
			MOVWF	FCOUNT
AFLASH		BSF		PORTB,AMBERBIT
			CALL	DELAY
			BCF		PORTB,AMBERBIT
			CALL	DELAY
			DECFSZ	FCOUNT,F
			GOTO	AFLASH
			RETURN

RED			CLRF	PORTB			; Off any remaining lights
			MOVLW	REDLT			;\
			CALL	LTABLE			; | Turn RED on
			MOVWF	PORTB			;/
			CALL	BUZZFL			; Acts as a 6s delay
			RETURN

BUZZFL		MOVLW	0x0F			; Buzz 15 times in 5s
			MOVWF	FCOUNT
BFLASH		BSF		PORTB,BUZZBIT
			CALL	DELAY
			BCF		PORTB,BUZZBIT
			CALL	DELAY
			DECFSZ	FCOUNT,F
			GOTO	BFLASH
			RETURN

DELAY		MOVLW	0xFF			; 0.2s delay
			MOVWF	MCOUNT
GET_N 		MOVLW	0XFF
			MOVWF	NCOUNT
DEC_N	 	DECFSZ	NCOUNT,F
			GOTO	DEC_N
			DECFSZ	MCOUNT,F
			GOTO	GET_N
			RETURN

DELAY1S		MOVLW	0x05			; 1s delay
			MOVWF	DCOUNT
CYCLE		CALL	DELAY
			DECFSZ	DCOUNT,F
			GOTO	CYCLE
			RETURN

			END
